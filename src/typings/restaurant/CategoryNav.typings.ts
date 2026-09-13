import type { FoodCategory } from "../../constants/restaurant/FoodCategories";


export interface CategoryNavProps {
  selectedCategory: FoodCategory;
  onCategoryChange: (category: FoodCategory) => void;
}
