import type { CartItem } from "../typings/restaurant/FoodCart.typings";

export function getCartTotals(items: CartItem[], discount: number) {
  const itemTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = items.length ? 40 : 0;
  const platformFee = items.length ? 15 : 0;
  const appliedDiscount = Math.min(Math.max(discount, 0), itemTotal);
  const total = Math.max(0, itemTotal + deliveryFee + platformFee - appliedDiscount);

  return { itemTotal, deliveryFee, platformFee, appliedDiscount, total };
}
