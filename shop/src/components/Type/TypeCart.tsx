import { ITypesCars } from "../../Types/types";

const TypeCart = ({ name, img }: ITypesCars) => {
  return (
    <div className="type__cart">
      <img src={img} alt="type__cart-image" className="type__cart-image" />
      <p className="type__cart-name">{`${name
        .charAt(0)
        .toUpperCase()}${name.slice(1)}`}</p>
    </div>
  );
};

export default TypeCart;
