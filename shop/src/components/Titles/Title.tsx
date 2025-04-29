import React from "react";
import strTop from "./../Header/Icons/strTop.svg";

const Title = ({ name }: { name: string }) => {
  return (
    <div className="title__header">
      <h3 className="title__header-name">{name}</h3>
      <a href="" className="title__header-link">
        View All
        <span className="title__header-str">
          <img src={strTop} alt="" />
        </span>
      </a>
    </div>
  );
};

export default Title;
