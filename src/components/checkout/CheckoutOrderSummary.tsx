import { LockKeyhole, ShieldCheck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isFirst50Coupon } from "../../constants/restaurant/Coupons";
import { getCartTotals } from "../../store/cartTotals";
import { applyCoupon, removeCoupon } from "../../store/slices/cartSlice";
import type { AppDispatch, RootState } from "../../store/store";
import CouponBox from "../../ui-kit/CouponBox";

function CheckoutOrderSummary() {
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
    <div className="space-y-5">
      <aside className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-bold text-slate-900">Order Summary</h2>
          <button
            type="button"
            onClick={() => navigate("/restaurant/foodhive")}
            className="cursor-pointer text-sm text-blue-600 hover:underline"
          >
            Edit
          </button>
        </div>

        <div className="mt-4 space-y-4">
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
                <p className="mt-1 text-xs text-slate-500">Qty: {item.quantity}</p>
              </div>
              <p className="text-sm font-bold text-slate-900">
                ₹{item.price * item.quantity}
              </p>
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

        <div className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
          <p className="flex justify-between gap-3">
            <span>Item Total</span>
            <span>₹{itemTotal}</span>
          </p>
          <p className="mt-3 flex justify-between gap-3">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </p>
          <p className="mt-3 flex justify-between gap-3">
            <span>Platform Fee</span>
            <span>₹{platformFee}</span>
          </p>
          {appliedDiscount > 0 && (
            <p className="mt-3 flex justify-between gap-3 text-emerald-700">
              <span>Coupon Discount</span>
              <span>-₹{appliedDiscount}</span>
            </p>
          )}
        </div>

        <p className="mt-5 flex justify-between gap-3 border-t border-slate-100 pt-4 text-base font-bold text-slate-900">
          <span>Total Amount</span>
          <span>₹{total}</span>
        </p>

        <button
          type="button"
          className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          <LockKeyhole size={17} />
          Pay ₹{total}
        </button>

        <div className="mt-5 flex items-start justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck size={23} className="shrink-0 text-emerald-600" />
          <span>
            <strong className="block text-slate-700">100% Secure Payments</strong>
            Your payment information is safe with us.
          </span>
        </div>
      </aside>

      <div className="flex min-h-28 items-center rounded-xl bg-gradient-to-r from-emerald-50 to-white p-4 sm:min-h-36 sm:p-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-emerald-100 text-3xl sm:h-16 sm:w-16">
          🍜
        </div>
        <div className="ml-4">
          <p className="text-lg font-bold leading-5 text-slate-900 sm:text-xl">
            Good Food
            <br />
            Happier You
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Fresh meals, delivered with care.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutOrderSummary;
