import { Check, Tag, X } from "lucide-react";
import { useState } from "react";
import type { CouponBoxProps } from "../typings/restaurant/FoodCart.typings";

function CouponBox({ appliedCoupon, discount, onApply, onRemove }: CouponBoxProps) {
  const [couponCode, setCouponCode] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleApply = () => {
    const isApplied = onApply(couponCode);
    setHasError(!isApplied);

    if (isApplied) {
      setCouponCode("");
    }
  };

  if (appliedCoupon) {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-600 text-white"><Check size={13} /></span>
        <span className="min-w-0 flex-1 text-sm">
          <strong>{appliedCoupon}</strong> applied — you saved ₹{discount}
        </span>
        <button type="button" onClick={onRemove} aria-label="Remove coupon" className="cursor-pointer rounded p-1 transition hover:bg-emerald-100"><X size={16} /></button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2 rounded-lg bg-slate-50 p-2">
        <Tag size={17} className="mt-2 shrink-0 text-rose-500" />
        <input value={couponCode} onChange={(event) => { setCouponCode(event.target.value.toUpperCase()); setHasError(false); }} placeholder="Enter coupon code" className="min-w-0 flex-1 bg-transparent text-sm uppercase outline-none placeholder:normal-case" />
        <button type="button" onClick={handleApply} className="cursor-pointer rounded-md px-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">Apply</button>
      </div>
      {hasError && <p className="mt-1 text-xs text-rose-600">Try FIRST50 for ₹50 off.</p>}
    </div>
  );
}

export default CouponBox;
