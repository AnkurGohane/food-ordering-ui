import {
  Search,
  Tag,
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store/store";
import CitySelector from "../../ui/CitySelector";

function Navbar() {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-3 px-4 py-3 sm:px-6 lg:h-16 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-0">
        <div className="flex items-center justify-between gap-3">
           <Link
    to="/restaurant/foodhive"
    className="shrink-0"
  >
    <img
      src="/images/platform-logo.png"
      alt="FoodHive"
      className="h-10 w-auto object-contain"
    />
  </Link>

          <div className="flex shrink-0 items-center gap-4 sm:gap-6 lg:hidden">
            <NavActions cartCount={cartCount} compact />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 lg:max-w-3xl lg:gap-6">
          <CitySelector />
          <div className="relative min-w-0 flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 sm:left-4"
            />
            <input
              type="search"
              placeholder="Search for restaurants, cuisines, or dishes..."
              className="h-10 w-full rounded-lg bg-gray-100 pl-10 pr-3 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-green-500 sm:h-11 sm:pl-11 sm:pr-4"
            />
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <NavActions cartCount={cartCount} />
        </div>
      </div>
    </header>
  );
}

function NavActions({
  cartCount,
  compact = false,
}: {
  cartCount: number;
  compact?: boolean;
}) {
  return (
    <>
      {!compact && (
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
        >
          <Tag size={18} />
          <span>Offers</span>
        </button>
      )}

      <button
        type="button"
        aria-label="Favorites"
        className="cursor-pointer text-gray-700 transition hover:text-green-600"
      >
        <Heart size={21} />
      </button>

      <Link
        to="/checkout"
        aria-label="Cart"
        className="relative cursor-pointer text-gray-700 transition hover:text-green-600"
      >
        <ShoppingBag size={21} />
        {cartCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-medium text-white">
            {cartCount}
          </span>
        )}
      </Link>

      <button
        type="button"
        aria-label="Profile"
        className="cursor-pointer text-gray-700 transition hover:text-green-600"
      >
        <User size={21} />
      </button>
    </>
  );
}

export default Navbar;
