import React, { useContext, useRef } from "react";
import { PortfolioContext } from "../../Context/context";
import Hero from "./Hero/Main";
import AwaDigital from "./AwaDigital/Main";
import './_FrontendPage.scss'
import SapaAdmin from "./SapaAdmin/Main";
import ReactMeals from "./ReactMeals/Main";

const FrontendPage = () => {
  const {
    heroCard,
    firstCard,
    secondCard,
    thirdCard,
    setFirstCard,
    setSecondCard,

    setThirdCard,
    setHeroCard,
  } = useContext(PortfolioContext);
  const cardValues = [heroCard, firstCard, secondCard, thirdCard];
  const cardSetters = [setHeroCard, setFirstCard, setSecondCard, setThirdCard];

  const handleCardClick = (index) => {
    cardSetters.forEach((setter, i) => {
      setter(i === index);
    });
    const pagesContainer = frontendPageRef.current.querySelector(".frontend-pages");
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
        <SapaAdmin />
        <ReactMeals />
      </div>
    </section>
  );
};

export default FrontendPage;
