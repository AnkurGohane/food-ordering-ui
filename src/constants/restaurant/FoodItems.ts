import type { FoodItem } from "../../typings/restaurant/FoodItem.typings";


export const FOOD_ITEMS: FoodItem[] = [
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Soft paneer marinated with spices and grilled to perfection.",
    price: 249,
    image: "/images/paneer-tikka.png",
    category: "Starters",
    isVeg: true,
  },
  {
    id: 2,
    name: "Chicken Tikka",
    description: "Juicy chicken pieces marinated and grilled.",
    price: 319,
    image: "/images/chicken-tikka.png",
    category: "Starters",
    isVeg: false,
  },
  {
    id: 3,
    name: "Veg Biryani",
    description: "Aromatic basmati rice cooked with fresh vegetables and spices.",
    price: 229,
    image: "/images/veg-biryani.png",
    category: "Biryani",
    isVeg: true,
  },
  {
    id: 4,
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie with vanilla ice cream.",
    price: 149,
    image: "/images/chocolate-brownie.png",
    category: "Desserts",
    isVeg: true,
  },
];