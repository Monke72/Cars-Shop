import { useEffect, useState } from "react";
import Title from "../Titles/Title";
import { getCars } from "../../getCarsFunc";
import Cart from "../Cart/Cart";
import Skeleton from "../Skeleton/Skeleton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

type CategoryChoice = "recent" | "popular";

const AllCars = () => {
  const [category, setCategory] = useState<CategoryChoice>("recent");
  const dispatch = useDispatch<AppDispatch>();
  const { recent, popular, status } = useSelector(
    (state: RootState) => state.cars
  );

  useEffect(() => {
    dispatch(getCars(category));
  }, [category, dispatch]);

  const carsToRender = category === "recent" ? recent : popular;

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
          {status === "loading" ? (
            <div className="skeleton-wrapper">
              <Skeleton />
            </div>
          ) : (
            <div className="all__cart-wrapper">
              {carsToRender.map((el, i) => (
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
