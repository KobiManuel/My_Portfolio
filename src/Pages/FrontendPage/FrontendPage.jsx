import React, { useRef } from "react";
import Hero from "./Hero/Main";
import AwaDigital from "./AwaDigital/Main";
import "./_FrontendPage.scss";
import ReactMeals from "./ReactMeals/Main";
import SapaWeb from "./SapaWeb/Main";

import { useDispatch, useSelector } from "react-redux";
import {
  setFirstCard,
  setSecondCard,
  setThirdCard,
  setHeroCard,
} from "../../Context/portfolioSlice";

const FrontendPage = () => {
  const dispatch = useDispatch();
  console.log("frontendpage running");

  const heroCard = useSelector((state) => state.portfolio.heroCard);
  const firstCard = useSelector((state) => state.portfolio.firstCard);
  const secondCard = useSelector((state) => state.portfolio.secondCard);
  const thirdCard = useSelector((state) => state.portfolio.thirdCard);

  const cardValues = [heroCard, firstCard, secondCard, thirdCard];

  const handleCardClick = (index) => {
    dispatch(setHeroCard(index === 0));
    dispatch(setFirstCard(index === 1));
    dispatch(setSecondCard(index === 2));
    dispatch(setThirdCard(index === 3));

    const pagesContainer =
      frontendPageRef.current.querySelector(".frontend-pages");
    const component = pagesContainer.children[index];
    if (component) {
      component.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const frontendPageRef = useRef(null);

  return (
    <section className="frontend-page" ref={frontendPageRef}>
      <div className="fixed">
        {cardValues.map((card, index) => (
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
            transform: thirdCard && "rotate(90deg) translateX(200%)",
            opacity: thirdCard && "0",
            transition: "all 0.7s ease",
          }}
        >
          <p>Scroll </p>
          <p></p>
          <p> down</p>

          <p>→</p>
        </div>
      </div>
      <div className="frontend-pages">
        <Hero />
        <AwaDigital />
        <SapaWeb />
        <ReactMeals />
      </div>
    </section>
  );
};

export default React.memo(FrontendPage);
