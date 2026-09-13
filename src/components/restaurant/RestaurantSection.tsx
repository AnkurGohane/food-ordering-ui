import { RESTAURANT } from "../../constants/restaurant/Restaurant";
import RestaurantCard from "../../ui-kit/RestaurantCard";
import RestaurantMenu from "./RestaurantMenu";


function RestaurantSection() {
  return (
    <section className="mx-auto max-w-[1920px] px-4 py-4 sm:px-6 sm:py-5">
      <RestaurantCard {...RESTAURANT} />
      <RestaurantMenu />
    </section>
  );
}

export default RestaurantSection;
