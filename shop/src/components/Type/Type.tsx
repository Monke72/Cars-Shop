import suv from "./icons/suv.svg";
import sedan from "./icons/sedan.svg";
import hatch from "./icons/hatch.svg";
import coupe from "./icons/coupe.png";
import hybrid from "./icons/hubrid.png";
import convert from "./icons/convert.png";
import { ITypesCars } from "../../Types/types";
import TypeCart from "./TypeCart";
import Title from "../Titles/Title";

const cartArray: ITypesCars[] = [
  { name: "suv", img: suv },
  { name: "sedan", img: sedan },
  { name: "hatch", img: hatch },
  { name: "coupe", img: coupe },
  { name: "convert", img: convert },
  { name: "hybrid", img: hybrid },
];

const Type = () => {
  return (
    <section className="type container">
      <Title name="All Types" />
      <div className="type__wrapper">
        {cartArray.map((el, i) => (
          <TypeCart key={i} name={el.name} img={el.img}></TypeCart>
        ))}
      </div>
    </section>
  );
};

export default Type;
