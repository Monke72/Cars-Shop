import { ICars } from "../Types/types";
import speed from "./Icons/spped.svg";
import fuel from "./Icons/fuel.svg";
import box from "./Icons/box.svg";
import strTop from "./../components/Header/Icons/strTop.svg";

const Cart = ({ el }: { el: ICars }) => {
  return (
    <div className="cart">
      <div className="cart__header">
        <img className="cart__header-image" src={el.urlPhoto} alt="" />{" "}
        <span className="">+++</span>
        <span>Good Prive</span>
      </div>
      <div className="cart__footer">
        <div className="cart__footer-info">
          <h5 className="cart__footer-info__name">{el.name}</h5>
          <p className="cart__footer-info__description">{el.details}</p>
        </div>
        <div className="cart__footer-equipment">
          <ul className="cart__footer-equipment__list">
            <li className="cart__footer-equipment__item">
              <img
                className="cart__footer-equipment__image"
                src={speed}
                alt="speed"
              />
              <p className="cart__footer-equipment__text">{el.acceleration}s</p>
            </li>
            <li className="cart__footer-equipment__item">
              <img
                className="cart__footer-equipment__image"
                src={fuel}
                alt=""
              />
              <p className="cart__footer-equipment__text">{el.fuel}</p>
            </li>
            <li className="cart__footer-equipment__item">
              <img className="cart__footer-equipment__image" src={box} alt="" />
              <p className="cart__footer-equipment__text">Automatic</p>
            </li>
          </ul>
        </div>
        <div className="cart__footer-price">
          <h5 className="cart__footer-price__title">${el.price} </h5>
          <a href="" className="cart__footer-open">
            View Details
            <span>
              <img src={strTop} alt="" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
