import { useEffect, useState } from "react";
import Title from "../Titles/Title";
import getCars from "../../getCarsFunc";
import { ICars } from "../../Types/types";
import Cart from "../../Cart/Cart";
import Skeleton from "../../Skeleton/Skeleton";

const AllCars = () => {
  const [recentCars, setRecentCars] = useState<ICars[]>([]);
  const [popularCars, setPopularCars] = useState<ICars[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  type CategoryChoice = "recent" | "popular";
  const [category, setCategory] = useState<CategoryChoice>("recent");

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);

      if (category === "recent") {
        await getCars("?page=2&limit=8", setRecentCars);
      } else {
        await getCars("?page=1&limit=8", setPopularCars);
      }

      setLoading(false);
    };

    fetchCars();
  }, [category]);

  return (
    <section className="all">
      <div className="all_wrapper container">
        <Title name="Explore All Vehicles" />

        <div className="all__choice">
          <button
            onClick={() => setCategory("recent")}
            className={`all__choise-recent ${
              category === "recent" ? "all__active" : ""
            }`}
          >
            Recent Cars
          </button>
          <button
            onClick={() => setCategory("popular")}
            className={`all__choise-popular ${
              category === "popular" ? "all__active" : ""
            }`}
          >
            Popular Cars
          </button>
        </div>
        <div className="wrapper__cart-all">
          {loading ? (
            <div className="skeleton-wrapper">
              <Skeleton />
            </div>
          ) : category === "recent" ? (
            <div className="all__recent-cart__wrapper all__cart-wrapper">
              {recentCars.map((el, i) => (
                <Cart key={i} el={el} />
              ))}
            </div>
          ) : (
            <div className="all__popular-cart__wrapper all__cart-wrapper">
              {popularCars.map((el, i) => (
                <Cart key={i} el={el} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllCars;
