
import { FOOD_CATEGORIES } from "../constants/restaurant/FoodCategories";
import type { CategoryNavProps } from "../typings/restaurant/CategoryNav.typings";


function CategoryNav({
  selectedCategory,
  onCategoryChange,
}: CategoryNavProps) {
  return (
    <nav className="border-b border-gray-200">
      <div className="-mx-1 flex items-center gap-5 overflow-x-auto px-1 pb-px sm:gap-8">
        {FOOD_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`cursor-pointer whitespace-nowrap border-b-2 pb-3 text-sm transition ${
              selectedCategory === category
                ? "border-green-600 font-semibold text-green-600"
                : "border-transparent text-gray-600 hover:text-green-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default CategoryNav;
