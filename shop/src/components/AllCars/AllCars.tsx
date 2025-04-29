import { useEffect, useState } from "react";
import Title from "../Titles/Title";
import getCars from "../../getCarsFunc";
import { ICars } from "../../Types/types";
import Cart from "../../Cart/Cart";

const AllCars = () => {
  const [recentCars, setRecentCars] = useState<ICars[]>([]);
  useEffect(() => {
    getCars("?page=2&limit=8", setRecentCars);
  }, []);
  console.log(recentCars);

  return (
    <section className="all">
      <div className="all_wrapper container">
        <Title name="Explore All Vehicles" />

        <div className="all__choice">
          <button className="all__choise-recent all__active">
            Recent Cars
          </button>
          <button className="all__choise-popular">Popular Cars</button>
        </div>
        <div className="wrapper__cart-all">
          <div className="all__recent-cart__wrapper">
            {recentCars.map((el, i) => (
              <Cart key={i} el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCars;
