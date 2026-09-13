export const FOOD_CATEGORIES = [
  "Recommended",
  "Combos",
  "Starters",
  "Main Course",
  "Biryani",
  "Pizzas",
  "Desserts",
  "Beverages",
] as const;

export type FoodCategory = (typeof FOOD_CATEGORIES)[number];