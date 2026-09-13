import type { FoodCategory } from "../../constants/restaurant/FoodCategories";

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
  isVeg: boolean;
}

export interface FoodCardProps {
  item: FoodItem;
  quantity: number;
  onAdd: (item: FoodItem) => void;
  onDecrease: (itemId: number) => void;
}
