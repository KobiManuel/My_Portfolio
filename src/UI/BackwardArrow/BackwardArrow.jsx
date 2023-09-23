import React from "react";
import arrow from "../PageHeader/images/angle-double-left.png";
import "./BackwardArrow.scss";
import { Link } from "react-router-dom";

const BackwardArrow = () => {
  return (
    <Link to={"/"} style={{ zIndex: 70000000000000 }}>
      <button className="backward-arrow">
        <img src={arrow} alt="arrow-icon" />
      </button>
    </Link>
  );
};

export default BackwardArrow;
