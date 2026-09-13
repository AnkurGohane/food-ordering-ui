import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOOD_ITEMS } from "../../constants/restaurant/FoodItems";
import { FOOD_CATEGORIES, type FoodCategory } from "../../constants/restaurant/FoodCategories";
import { getCartTotals } from "../../store/cartTotals";
import { addItem, decreaseQuantity } from "../../store/slices/cartSlice";
import type { AppDispatch, RootState } from "../../store/store";
import type { FoodItem } from "../../typings/restaurant/FoodItem.typings";
import CategoryNav from "../../ui-kit/CategoryNav";
import EmptyState from "../../ui-kit/EmptyState";
import FoodCard from "../../ui-kit/FoodCard";
import CartSummary from "./CartSummary";

function RestaurantMenu() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const discount = useSelector((state: RootState) => state.cart.discount);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { total } = getCartTotals(cartItems, discount);
  const [selectedCategory, setSelectedCategory] =
    useState<FoodCategory>(FOOD_CATEGORIES[0]);

  const filteredItems =
    selectedCategory === "Recommended"
      ? FOOD_ITEMS
      : FOOD_ITEMS.filter((item) => item.category === selectedCategory);

  const handleAddItem = (item: FoodItem) => {
    dispatch(addItem(item));
  };

  const handleDecreaseItem = (itemId: number) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <section className={`mt-5 ${cartCount > 0 ? "pb-24 lg:pb-0" : ""}`}>
      <CategoryNav
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-slate-900">
            {selectedCategory === "Recommended"
              ? "Recommended for you"
              : selectedCategory}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {selectedCategory === "Recommended"
              ? "Most loved dishes from this restaurant"
              : `Dishes in ${selectedCategory}`}
          </p>
          <div className="mt-5 space-y-6">
            {filteredItems.length === 0 ? (
              <EmptyState
                title={`No ${selectedCategory} items yet`}
                description="This category is coming soon. Pick another one from the menu above."
              />
            ) : (
              filteredItems.map((item) => {
                const cartItem = cartItems.find(
                  (cartItem) => cartItem.id === item.id
                );

                return (
                  <FoodCard
                    key={item.id}
                    item={item}
                    quantity={cartItem?.quantity ?? 0}
                    onAdd={handleAddItem}
                    onDecrease={handleDecreaseItem}
                  />
                );
              })
            )}
          </div>
        </div>

        <CartSummary />
      </div>

      {cartCount > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 lg:hidden">
          <button
            type="button"
            onClick={() =>
              document.getElementById("cart")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white"
          >
            <span>
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </span>
            <span>View cart · ₹{total}</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default RestaurantMenu;
