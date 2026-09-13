import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { savePersisted, STORAGE_KEYS } from "./persist";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  savePersisted(STORAGE_KEYS.cart, store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
