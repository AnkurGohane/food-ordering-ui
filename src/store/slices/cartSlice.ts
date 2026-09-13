import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../typings/restaurant/FoodCart.typings";
import type { FoodItem } from "../../typings/restaurant/FoodItem.typings";
import { FIRST50_COUPON, isFirst50Coupon } from "../../constants/restaurant/Coupons";
import { loadPersisted, STORAGE_KEYS } from "../persist";

interface CartState {
  items: CartItem[];
  couponCode: string | null;
  discount: number;
}

const emptyCart: CartState = {
  items: [],
  couponCode: null,
  discount: 0,
};

function isCartState(value: unknown): value is CartState {
  if (!value || typeof value !== "object") {
    return false;
  }

  const cart = value as CartState;
  return Array.isArray(cart.items) && (cart.couponCode === null || typeof cart.couponCode === "string") && typeof cart.discount === "number";
}

const persistedCart = loadPersisted<unknown>(STORAGE_KEYS.cart, emptyCart);

const initialState: CartState = isCartState(persistedCart)
  ? persistedCart
  : emptyCart;

function clearCouponIfEmpty(state: CartState) {
  if (state.items.length === 0) {
    state.couponCode = null;
    state.discount = 0;
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<FoodItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({ ...action.payload, quantity: 1 });
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);

      if (!item) {
        return;
      }

      if (item.quantity === 1) {
        state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
        clearCouponIfEmpty(state);
        return;
      }

      item.quantity -= 1;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      clearCouponIfEmpty(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.couponCode = null;
      state.discount = 0;
    },
    applyCoupon: (state, action: PayloadAction<string>) => {
      if (isFirst50Coupon(action.payload)) {
        state.couponCode = FIRST50_COUPON.code;
        state.discount = FIRST50_COUPON.discount;
      }
    },
    removeCoupon: (state) => {
      state.couponCode = null;
      state.discount = 0;
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
  applyCoupon,
  removeCoupon,
} = cartSlice.actions;

export default cartSlice.reducer;
