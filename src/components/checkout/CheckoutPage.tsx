import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store/store";
import CheckoutProgress from "../../ui/CheckoutProgress";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutOrderSummary from "./CheckoutOrderSummary";

function CheckoutPage() {
  const hasItems = useSelector((state: RootState) => state.cart.items.length > 0);

  if (!hasItems) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-[1920px] items-center justify-center px-4 sm:px-6">
        <div className="max-w-sm text-center">
          <ShoppingBag size={42} className="mx-auto text-emerald-600" />
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Your cart is empty</h1>
          <p className="mt-2 text-slate-500">Add a dish before heading to checkout.</p>
          <Link
            to="/restaurant/foodhive"
            className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Browse the menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50/70">
      <CheckoutProgress currentStep={2} />
      <div className="mx-auto grid max-w-[1920px] gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.85fr)]">
        <CheckoutDetails />
        <CheckoutOrderSummary />
      </div>
    </section>
  );
}

export default CheckoutPage;
