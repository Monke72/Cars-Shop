import { ICars } from "../Types/types";
import speed from "./Icons/spped.svg";
import fuel from "./Icons/fuel.svg";
import box from "./Icons/box.svg";
import strTop from "./../components/Header/Icons/strTop.svg";
import { useState } from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { useDispatch } from "react-redux";
import { pushInBasket } from "../Store/basket/basketSlice";
import { removeFromBasket } from "../Store/basket/basketSlice";

const Cart = ({ el }: { el: ICars }) => {
  const basket = useSelector((state: RootState) => state.basket.arrayId);
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = (el: ICars) => {
    dispatch(removeFromBasket(el.id));
    console.log(el.id);

    setOpen(false);
  };
  const handleAddInBasker = (el: ICars) => {
    dispatch(pushInBasket(el.id));

    setOpen(false);
  };
  return (
    <div className="cart">
      <h1>{basket}</h1>
      <div className="cart__header">
        <img className="cart__header-image" src={el.urlPhoto} alt="" />{" "}
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
          <button className="cart__footer-open" onClick={showModal}>
            View Details
            <span>
              <img src={strTop} alt="" />
            </span>
          </button>
        </div>
      </div>
      <Modal
        open={open}
        width={800}
        footer={null}
        onCancel={() => handleCancel(el)}
      >
        <div className="cart__modal">
          <h4 className="cart__modal-title">{el.name}</h4>
          <img className="cart__modal-image" src={el.urlPhoto} alt="" />
          <p className="cart__modal-info">{el.details}</p>
          <p className="cart__modal-acc">
            Acceleration to 100 in {el.acceleration}s
          </p>
          <h5 className="cart__modal-price">{el.price}$</h5>

          <div className="cart__modal-btns">
            <button
              className="cart__modal-cancel"
              onClick={() => handleCancel(el)}
            >
              Cansel
            </button>
            <button
              className="cart__modal-add"
              onClick={() => handleAddInBasker(el)}
            >
              Add to basket
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
