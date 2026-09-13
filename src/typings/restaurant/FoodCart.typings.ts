import type { FoodItem } from "./FoodItem.typings";

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface QuantityControlProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export interface CouponBoxProps {
  appliedCoupon: string | null;
  discount: number;
  onApply: (code: string) => boolean;
  onRemove: () => void;
}
