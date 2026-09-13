import { Plus } from "lucide-react";
import type { FoodCardProps } from "../typings/restaurant/FoodItem.typings";
import QuantityControl from "../ui/QuantityControl";

function FoodCard({ item, quantity, onAdd, onDecrease }: FoodCardProps) {
  return (
    <article className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full shrink-0 rounded-xl bg-slate-100 object-cover sm:h-24 sm:w-24"
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2">
          <span
            className={`grid h-4 w-4 place-items-center rounded-sm border-2 ${
              item.isVeg ? "border-emerald-600" : "border-rose-600"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                item.isVeg ? "bg-emerald-600" : "bg-rose-600"
              }`}
            />
          </span>
          <h3 className="font-semibold text-slate-900">{item.name}</h3>
        </div>

        <p className="mt-1 text-sm leading-5 text-slate-500">{item.description}</p>
        <p className="mt-2 font-semibold text-slate-900">₹{item.price}</p>
      </div>

      {quantity > 0 ? (
        <div className="self-start sm:self-center">
          <QuantityControl
            quantity={quantity}
            onDecrease={() => onDecrease(item.id)}
            onIncrease={() => onAdd(item)}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => onAdd(item)}
          className="flex h-9 w-full shrink-0 cursor-pointer items-center justify-center gap-2 self-start rounded-lg border border-emerald-600 px-5 font-semibold text-emerald-600 transition hover:bg-emerald-50 sm:w-auto sm:self-center"
        >
          Add <Plus size={18} />
        </button>
      )}
    </article>
  );
}

export default FoodCard;
