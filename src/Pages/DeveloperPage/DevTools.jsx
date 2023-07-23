import React, { useContext, useRef } from "react";
import "./_DevTools.scss";
import { PortfolioContext } from "../../Context/context";
import LunaCodex from "./LunaCodex/Main";
import Hero from "./Hero/Main";
import SynthSpeak from "./SynthSpeak/Main";
import SvgConverter from "./SvgConverter/Main";

const DeveloperPage = () => {
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
    const pagesContainer = devToolsRef.current.querySelector(".devtool-pages");
    const component = pagesContainer.children[index];
    if (component) {
      component.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const devToolsRef = useRef(null);

  return (
    <section className="dev-tools" ref={devToolsRef}>
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

      <div className="devtool-pages">
        <Hero />
        <LunaCodex />
        <SynthSpeak />
        <SvgConverter />
      </div>
    </section>
  );
};

export default DeveloperPage;
