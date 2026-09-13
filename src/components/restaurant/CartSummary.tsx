import { ChevronRight, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isFirst50Coupon } from "../../constants/restaurant/Coupons";
import { getCartTotals } from "../../store/cartTotals";
import {
  applyCoupon,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeCoupon,
  removeItem,
} from "../../store/slices/cartSlice";
import type { AppDispatch, RootState } from "../../store/store";
import CouponBox from "../../ui-kit/CouponBox";
import QuantityControl from "../../ui/QuantityControl";

function CartSummary() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { items, couponCode, discount } = useSelector((state: RootState) => state.cart);
  const { itemTotal, deliveryFee, platformFee, appliedDiscount, total } =
    getCartTotals(items, discount);

  const handleApplyCoupon = (code: string) => {
    const isValid = isFirst50Coupon(code);

    if (isValid) {
      dispatch(applyCoupon(code));
    }

    return isValid;
  };

  return (
    <aside
      id="cart"
      className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-slate-900">Your Cart</h2>
        {items.length > 0 && (
          <button
            type="button"
            onClick={() => dispatch(clearCart())}
            className="cursor-pointer text-sm font-medium text-rose-500 transition hover:text-rose-600"
          >
            Clear All
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="py-10 text-center text-sm text-slate-500">
          Your cart is waiting for something delicious.
        </p>
      ) : (
        <>
          <div className="mt-5 space-y-4">
            {items.map((item) => (
              <article key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-lg bg-slate-100 object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-slate-700">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <QuantityControl
                    quantity={item.quantity}
                    onDecrease={() => dispatch(decreaseQuantity(item.id))}
                    onIncrease={() => dispatch(increaseQuantity(item.id))}
                  />
                  <button
                    type="button"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => dispatch(removeItem(item.id))}
                    className="cursor-pointer p-1 text-slate-400 transition hover:text-rose-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5">
            <CouponBox
              appliedCoupon={couponCode}
              discount={appliedDiscount}
              onApply={handleApplyCoupon}
              onRemove={() => dispatch(removeCoupon())}
            />
          </div>

          <div className="mt-5 border-t border-slate-100 pt-4 text-sm">
            <h3 className="font-bold text-slate-900">Bill Details</h3>
            <div className="mt-3 space-y-2 text-slate-500">
              <p className="flex justify-between gap-3">
                <span>Item Total</span>
                <span>₹{itemTotal}</span>
              </p>
              <p className="flex justify-between gap-3">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </p>
              <p className="flex justify-between gap-3">
                <span>Platform Fee</span>
                <span>₹{platformFee}</span>
              </p>
              {appliedDiscount > 0 && (
                <p className="flex justify-between gap-3 text-emerald-700">
                  <span>Coupon Discount</span>
                  <span>-₹{appliedDiscount}</span>
                </p>
              )}
            </div>
            <p className="mt-4 flex justify-between gap-3 border-t border-slate-100 pt-4 text-base font-bold text-slate-900">
              <span>Total</span>
              <span>₹{total}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Proceed to Checkout <ChevronRight size={19} />
          </button>
        </>
      )}
    </aside>
  );
}

export default CartSummary;
