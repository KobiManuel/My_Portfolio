import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../PageHeader/images/angle-double-left.png";
import "./BackwardArrow.scss";

const BackwardArrow = () => {
  const navigate = useNavigate();
  return (
    <button className="backward-arrow" onClick={() => navigate(-1)}>
      <img src={arrow} alt="arrow-icon" />
    </button>
  );
};

export default BackwardArrow;
