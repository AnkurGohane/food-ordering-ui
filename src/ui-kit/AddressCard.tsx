import type { AddressCardProps } from "../typings/checkout/CheckoutDetails.typings";

function AddressCard({
  label,
  address,
  contact,
  icon: Icon,
  isDefault = false,
  isSelected,
  onSelect,
}: AddressCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full cursor-pointer gap-3 rounded-lg border p-3 text-left transition ${
        isSelected
          ? "border-emerald-300 bg-emerald-50/40"
          : "border-slate-200 hover:border-emerald-200"
      }`}
    >
      <span className={`mt-1 h-5 w-5 rounded-full border-2 p-0.5 ${isSelected ? "border-emerald-600" : "border-slate-300"}`}>
        <span className={`block h-full w-full rounded-full ${isSelected ? "bg-emerald-600" : ""}`} />
      </span>
      <Icon size={20} className="mt-0.5" />
      <span>
        <span className="flex items-center gap-2 font-semibold text-slate-900">
          {label}
          {isDefault && <small className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">Default</small>}
        </span>
        <span className="mt-1 block text-xs leading-5 text-slate-500">{address}<br />{contact}</span>
      </span>
    </button>
  );
}

export default AddressCard;
