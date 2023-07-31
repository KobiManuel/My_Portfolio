import React, { useEffect, useRef } from "react";
import Hero from "../../Components/Hero/Main";
import DeveloperSection from "../../Components/DeveloperSection/Main";
import FrontendSection from "../../Components/FrontendSection/Main";
import DesignPage from "../../Components/DesignPage/Main";
import "./_Main.scss";
import AboutMe from "../../Components/AboutMe/Main";
import ContactMe from "../../Components/ContactMe/Main";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstCard,
  setSecondCard,
  setThirdCard,
  setFourthCard,
  setHeroCard,
  setFifthCard,
} from "../../Context/portfolioSlice";
import { useLocation } from "react-router";

const MainPage = () => {
  console.log("mainpage running");
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const heroCard = useSelector((state) => state.portfolio.heroCard);
  const firstCard = useSelector((state) => state.portfolio.firstCard);
  const secondCard = useSelector((state) => state.portfolio.secondCard);
  const thirdCard = useSelector((state) => state.portfolio.thirdCard);
  const fourthCard = useSelector((state) => state.portfolio.fourthCard);
  const fifthCard = useSelector((state) => state.portfolio.fifthCard);

  const handleCardClick = (index) => {
    dispatch(setHeroCard(index === 0));
    dispatch(setFirstCard(index === 1));
    dispatch(setSecondCard(index === 2));
    dispatch(setThirdCard(index === 3));
    dispatch(setFourthCard(index === 4));
    dispatch(setFifthCard(index === 5));

    const pagesContainer = containerRef.current.querySelector(".pages");
    const component = pagesContainer.children[index];
    if (component) {
      component.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerRef = useRef(null);

  useEffect(() => {
    if (pathname === "/") {
      const fixedDiv = document.querySelector(".fixed");
      fixedDiv.style.transform = "translateX(0)";
    }
  }, [pathname]);

  return (
    <div className="main_page" ref={containerRef}>
      <div className="fixed">
        {[
          heroCard,
          firstCard,
          secondCard,
          thirdCard,
          fourthCard,
          fifthCard,
        ].map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: card ? "48px" : "24px",
            }}
          ></button>
        ))}

        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            transform: fifthCard && "rotate(90deg) translateX(200%)",
            opacity: fifthCard && "0",
            transition: "all 0.7s ease",
          }}
        >
          <p>Scroll </p>
          <p></p>
          <p> down</p>

          <p>→</p>
        </div>
      </div>
      <div className="pages">
        <Hero />
        <DeveloperSection />
        <FrontendSection />
        <DesignPage />
        <AboutMe />
        <ContactMe />
      </div>
    </div>
  );
};

export default React.memo(MainPage);
