import { Clock, Heart, Share2, Star } from "lucide-react";
import type { RestaurantCardProps } from "../typings/restaurant/RestaurantCard.typings";

function RestaurantCard({
  name,
  tagline,
  rating,
  cuisine,
  deliveryTime,
  isPureVeg,
  image,
  logo,
}: RestaurantCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover sm:h-72"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16 sm:px-8 sm:pb-7 sm:pt-20">
        <div className="flex items-end justify-between gap-3 sm:gap-6">
          <div className="flex min-w-0 items-end gap-3 sm:gap-5">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-16 w-16 shrink-0 rounded-xl border-4 border-white bg-white object-cover sm:h-24 sm:w-24"
            />

            <div className="min-w-0 text-white">
              <h1 className="text-2xl font-bold sm:text-3xl">{name}</h1>
              <p className="mt-1 truncate text-sm text-white/80">{tagline}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:mt-3 sm:text-sm">
                <span className="flex items-center gap-1">
                  <Star size={16} fill="currentColor" />
                  {rating}
                </span>
                <span>{cuisine}</span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {deliveryTime}
                </span>
                {isPureVeg && <span>Pure Veg</span>}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Add to favorites"
              className="cursor-pointer rounded-full bg-white/90 p-2 text-gray-700 transition hover:bg-white sm:p-3"
            >
              <Heart size={20} />
            </button>
            <button
              type="button"
              aria-label="Share restaurant"
              className="cursor-pointer rounded-full bg-white/90 p-2 text-gray-700 transition hover:bg-white sm:p-3"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
