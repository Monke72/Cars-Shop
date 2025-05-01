import React from "react";
import strTop from "./../Header/Icons/strTop.svg";

interface ITitle {
  name: string;
  link?: boolean;
  classnameText?: string;
}

const Title = ({ name, link = true, classnameText = "" }: ITitle) => {
  return (
    <div className={`title__header`}>
      <h3 className={`title__header-name ${classnameText}`}>{name}</h3>
      {link && (
        <a href="" className="title__header-link">
          View All
          <span className="title__header-str">
            <img src={strTop} alt="" />
          </span>
        </a>
      )}
    </div>
  );
};

export default Title;
