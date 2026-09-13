import { UtensilsCrossed } from "lucide-react";
import type { EmptyStateProps } from "../typings/ui/EmptyState.typings";

function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-emerald-600 shadow-sm">
        <UtensilsCrossed size={22} />
      </span>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>
      )}
    </div>
  );
}

export default EmptyState;
