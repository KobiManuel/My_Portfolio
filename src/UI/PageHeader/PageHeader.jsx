import React, { useEffect, useState } from "react";
import "./_PageHeader.scss";
import arrow from "./images/angle-double-left.png";
import { useNavigate } from "react-router";
const PageHeader = ({ title1, title2, stack, banner }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const buttonStyle = {
    backgroundColor: isHovered && "",
  };

  useEffect(() => {
    const btn = document.getElementById("devtoolsBtn");

    const fixedDiv = document.querySelector(".fixed");
    fixedDiv.style.transform = "translateX(-128px)";
    setTimeout(() => {
      fixedDiv.style.transform = "translateX(0)";
    }, 100);

    const handleAnimationEnd = () => {
      btn.style.visibility = "hidden";
    };
    btn.addEventListener("animationend", handleAnimationEnd);
    const returnPage = document.querySelector(".backward-arrow");
    btn.style.animation = "materializeAnimation 1s forwards";
    setTimeout(() => {
      returnPage.style.transform = "translateX(0)";
      returnPage.style.opacity = "1";
    }, 400);

    return () => {
      btn.style.animation = "";
      btn.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const handlePageLoad = () => {
    const enlarge = document.getElementById("secondDiv");
    const page = document.querySelector(".page-header");
    setTimeout(() => {
      enlarge.style.height = "100%";
    }, 10);
    setTimeout(() => {
      page.style.position = "absolute";
      page.style.right = "0";
      page.style.width = "90vw";
    }, 800);
  };
  return (
    <div className="page-header_container">
      <button className="backward-arrow" onClick={() => navigate(-1)}>
        <img src={arrow} alt="arrow-icon" />
      </button>
      <div className="page-header">
        <div id="card1" className="project-card visible">
          <span>
            <h3>{title1}</h3>
            <h3>{title2}</h3>
          </span>
          <span></span>

          <p>{stack}</p>

          <a
            id="devtoolsBtn"
            href="/"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Visit site
          </a>
        </div>
        <div
          id="secondDiv"
          className="project-card visible"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onLoad={handlePageLoad}
        >
          <img
            src={banner}
            className="image visible"
            alt="project background"
          />
          {hovered && (
            <>
              <div className="ripple-1"></div>
              <div className="ripple-2"></div>
              <div className="ripple-3"></div>
              <div className="ripple-4"></div>
              <div className="ripple-5"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
