import { useSelector } from "react-redux";
import { RootState } from "./../../Store/store";

import { Link } from "react-router-dom";
import strLeft from "./../Header/Icons/strLeft.svg";
import { ICars } from "../../Types/types";
import { useEffect, useState } from "react";
import getCars from "../../getCarsFunc";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../Store/basket/basketSlice";

const Basket = () => {
  const [cars, setCars] = useState<ICars[]>([]);
  const basket = useSelector((state: RootState) => state.basket.arrayId);
  const dispatch = useDispatch();
  const [basketCars, setBasketCars] = useState<ICars[]>([]);

  const handleDelete = (el: ICars) => {
    dispatch(removeFromBasket(el.id));
  };

  useEffect(() => {
    async function getCarInBasket() {
      await getCars("", setCars);
    }
    getCarInBasket();
  }, []);

  useEffect(() => {
    const selectedCars = cars.filter((car) => basket.includes(car.id));
    setBasketCars(selectedCars);
    console.log(basketCars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basket, cars]);

  return (
    <section className="basket container">
      <div className="basket__header">
        <Link to={"/"}>
          <button>
            <span>
              <img src={strLeft} alt="" />
            </span>
            Back to Homepage
          </button>
        </Link>
        <h3>Basket</h3>
      </div>
      <div className="basket__main">
        {basketCars.length === 0 ? (
          <h4>Basket Clear</h4>
        ) : (
          <ul>
            {basketCars.map((cart) => (
              <li className="basket__cart-item" key={cart.id}>
                <img
                  className="basket__cart-image"
                  src={cart.urlPhoto}
                  alt=""
                />
                <h5 className="basket__cart-name">{cart.name}</h5>
                <h4 className="basket__cart-price">{cart.price}$</h4>
                <button
                  className="basket__cart-del"
                  onClick={() => handleDelete(cart)}
                >
                  Delete from basket
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Basket;
