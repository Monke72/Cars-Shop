import { Link } from "react-router-dom";
import strLeft from "./../Header/Icons/strLeft.svg";
const NotFound = () => {
  return (
    <section className="found container">
      <div>
        <Link to={"/"}>
          <button className="found__back">
            <span>
              <img src={strLeft} alt="" />
            </span>
            Back to Homepage
          </button>
        </Link>
        <div className="border-anim"></div>
      </div>
      <div className="found__container">
        <h3 className="found__title">Error 500</h3>
        <p className="found__info">
          Error on the server side try it in 10 minutes
        </p>
      </div>
    </section>
  );
};

export default NotFound;
