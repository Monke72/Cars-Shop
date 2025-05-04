import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../Store/store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { removeFromBasket } from "../../Store/basket/basketSlice";
import { ICars } from "../../Types/types";
import strLeft from "../Header/Icons/strLeft.svg";

const Basket = () => {
  const dispatch = useDispatch<AppDispatch>();
  const basket = useSelector((state: RootState) => state.basket.arrayId);
  const allCars = useSelector((state: RootState) => state.cars.all);
  const [basketCars, setBasketCars] = useState<ICars[]>([]);

  const totalPrice = basketCars.reduce((acc, car) => acc + car.price, 0);

  useEffect(() => {
    const selected = allCars.filter((car) => basket.includes(car.id));
    setBasketCars(selected);
  }, [basket, allCars]);

  const handleDelete = (car: ICars) => {
    dispatch(removeFromBasket(car.id));
  };

  return (
    <section className="basket container">
      <div className="basket__header">
        <Link to="/">
          <button className="basket__back-btn">
            <span>
              <img src={strLeft} alt="Back" />
            </span>
            Back to Homepage
          </button>
        </Link>
        <h3>Basket</h3>
      </div>

      <div className="basket__main">
        {basketCars.length === 0 ? (
          <h4>Basket is Empty</h4>
        ) : (
          <ul>
            {basketCars.map((car) => (
              <li className="basket__cart-item" key={car.id}>
                <img
                  src={car.urlPhoto}
                  alt={car.name}
                  className="basket__cart-image"
                />
                <h5 className="basket__cart-name">{car.name}</h5>
                <h4 className="basket__cart-price">{car.price}$</h4>
                <button
                  className="basket__cart-del"
                  onClick={() => handleDelete(car)}
                >
                  Delete from basket
                </button>
              </li>
            ))}
            <div className="basket__cart-info">
              <div className="basket__cart-total">
                Total Price: {totalPrice}$
              </div>
              <Link to="/error">
                <button className="basket__cart-buy">Buy Now</button>
              </Link>
            </div>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Basket;
