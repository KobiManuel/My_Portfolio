import React from "react";
import "./ScrollButtons.scss";
import Chevron from "../Icons/Chevron";

const ScrollButtons = ({ topScrollClick, bottomScrollClick }) => {
  return (
    <div className="nav-btn-container">
      <button className="nav-btn" onClick={topScrollClick}>
        <Chevron size={14} style={{ transform: "rotate(180deg)" }} />
      </button>
      <button type="button" className="nav-btn" onClick={bottomScrollClick}>
        <Chevron size={14} />
      </button>
    </div>
  );
};

export default ScrollButtons;
