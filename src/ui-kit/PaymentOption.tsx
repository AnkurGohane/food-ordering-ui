import { ChevronRight } from "lucide-react";
import type { PaymentOptionProps } from "../typings/checkout/CheckoutDetails.typings";

function PaymentOption({ label, detail, icon: Icon, isSelected, onSelect }: PaymentOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full cursor-pointer items-center gap-3 rounded-lg border p-3 text-left transition ${
        isSelected ? "border-emerald-500 bg-emerald-50" : "border-slate-200 hover:border-emerald-200"
      }`}
    >
      <span className={`h-5 w-5 rounded-full border-2 p-0.5 ${isSelected ? "border-emerald-600" : "border-slate-300"}`}>
        <span className={`block h-full w-full rounded-full ${isSelected ? "bg-emerald-600" : ""}`} />
      </span>
      <Icon size={18} />
      <span className="flex-1 text-sm font-semibold text-slate-900">{label}</span>
      {detail && (
        <span className="hidden text-xs text-slate-500 sm:inline">{detail}</span>
      )}
      <ChevronRight size={17} className="text-slate-400" />
    </button>
  );
}

export default PaymentOption;
