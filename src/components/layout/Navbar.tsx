import {
  MapPin,
  Search,
  Tag,
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";
import { CITIES } from "../../constants/cities";

function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">

        {/* The logo, goes in the left most part */}
        <div className="shrink-0 text-2xl font-bold tracking-tight text-green-600">
          FoodHive
        </div>

        {/* the central search bar + location selection */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6">
          

          <div className="flex shrink-0 items-center gap-2 text-sm text-gray-700">
  <MapPin size={18} />

  <select
    defaultValue="Pune"
    className="cursor-pointer bg-transparent outline-none"
  >
    {CITIES.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>


          <div className="relative w-[500px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search for restaurants, cuisines, or dishes..."
              className="h-11 w-full rounded-lg bg-gray-100 pl-11 pr-4 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="ml-auto flex shrink-0 items-center gap-6">
          <button className="flex items-center gap-2 text-sm text-gray-700">
            <Tag size={18} />
            <span>Offers</span>
          </button>

          <button
            aria-label="Favorites"
            className="text-gray-700 transition hover:text-green-600"
          >
            <Heart size={21} />
          </button>

          <button
            aria-label="Cart"
            className="relative text-gray-700 transition hover:text-green-600"
          >
            <ShoppingBag size={21} />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-green-600 px-1 text-[10px] font-medium text-white">
              0
            </span>
          </button>

          <button
            aria-label="Profile"
            className="text-gray-700 transition hover:text-green-600"
          >
            <User size={21} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;