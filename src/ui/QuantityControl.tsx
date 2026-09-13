import { Minus, Plus } from "lucide-react";
import type { QuantityControlProps } from "../typings/restaurant/FoodCart.typings";

function QuantityControl({ quantity, onDecrease, onIncrease }: QuantityControlProps) {
  return (
    <div className="flex h-8 items-center rounded-lg border border-slate-200 bg-slate-50">
      {/* This small control is shared by the menu and the cart */}
      <button type="button" aria-label="Decrease quantity" onClick={onDecrease} className="grid h-full w-8 cursor-pointer place-items-center text-slate-600 transition hover:bg-slate-100">
        <Minus size={15} />
      </button>
      <span className="w-6 text-center text-sm font-semibold text-slate-900">{quantity}</span>
      <button type="button" aria-label="Increase quantity" onClick={onIncrease} className="grid h-full w-8 cursor-pointer place-items-center text-emerald-600 transition hover:bg-emerald-50">
        <Plus size={15} />
      </button>
    </div>
  );
}

export default QuantityControl;
