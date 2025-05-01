import Title from "../Titles/Title";
import choiseCar from "./image/h21.jpg.jpg";
import icon1 from "./icon/Group.svg";
import icon2 from "./icon/f-d-2.svg.svg";
import icon3 from "./icon/f-d-3.svg.svg";
import icon4 from "./icon/f-d-4..svg";

const Choise = () => {
  return (
    <section className="choise container">
      <div className="choise__person">
        <div className="choise__person-info">
          <Title
            link={false}
            name="Online, in-person,
            everywhere"
            classnameText="choise__title"
          />
          <p className="choise__person-info__text">
            Choose from thousands of vehicles from multiple brands and buy
            online with Click & Drive, or visit us at one of our dealerships
            today.
          </p>
        </div>
        <div className="choise__person-image">
          <img src={choiseCar} alt="car" />
        </div>
      </div>
      <div className="choise__us">
        <Title name="Who Choose Us?" link={false} />
        <ul className="choise__us-list">
          <li className="choise__us-item">
            <img className="choise__us-image" src={icon1} alt="" />
            <h5 className="choise__us-title">Special Financing Offers</h5>
            <p className="choise__us-text">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </li>
          <li className="choise__us-item">
            <img className="choise__us-image" src={icon2} alt="" />
            <h5 className="choise__us-title">Trusted Car Dealership</h5>
            <p className="choise__us-text">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </li>
          <li className="choise__us-item">
            <img className="choise__us-image" src={icon3} alt="" />
            <h5 className="choise__us-title">Transparent Pricing</h5>
            <p className="choise__us-text">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </li>
          <li className="choise__us-item">
            <img className="choise__us-image" src={icon4} alt="" />
            <h5 className="choise__us-title">Expert Car Service</h5>
            <p className="choise__us-text">
              Our stress-free finance department that can find financial
              solutions to save you money.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Choise;
