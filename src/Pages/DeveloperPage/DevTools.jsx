import React, { useRef } from "react";
import "./_DevTools.scss";
import LunaCodex from "./LunaCodex/Main";
import Hero from "./Hero/Main";
import SynthSpeak from "./SynthSpeak/Main";
import SvgConverter from "./SvgConverter/Main";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstCard,
  setSecondCard,
  setThirdCard,
  setHeroCard,
} from "../../Context/portfolioSlice";
import ScrollButtons from "../../UI/ScrollButtons/ScrollButtons";
import BackwardArrow from "../../UI/BackwardArrow/BackwardArrow";

// console.log("devtools running");

const DeveloperPage = () => {
  const dispatch = useDispatch();

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

    const pagesContainer = devToolsRef.current.querySelector(".devtool-pages");
    const component = pagesContainer.children[index];
    if (component) {
      component.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = (direction) => {
    const pageContainer = devToolsRef.current.querySelector(".devtool-pages");
    const currentScrollTop = pageContainer.scrollTop;
    const pageHeight = window.innerHeight;
    let targetScrollTop;

    if (direction === "up") {
      targetScrollTop = currentScrollTop - pageHeight;
    } else if (direction === "down") {
      targetScrollTop = currentScrollTop + pageHeight;
    }

    pageContainer.scrollTo({ top: targetScrollTop, behavior: "smooth" });
  };

  const devToolsRef = useRef(null);

  const handleArrowButtonClick = (event) => {
    const pagesContainer =
      devToolsRef?.current?.querySelector(".devtool-pages");
    if (!pagesContainer) return;
    const currentScrollTop = pagesContainer?.scrollTop;
    const pageHeight = window.innerHeight;
    let targetScrollTop;

    if (event.keyCode === 38) {
      targetScrollTop = currentScrollTop - pageHeight;
    } else if (event.keyCode === 40) {
      targetScrollTop = currentScrollTop + pageHeight;
    }
    pagesContainer.scrollTo({ top: targetScrollTop, behavior: "smooth" });
  };

  window.addEventListener("keydown", handleArrowButtonClick);

  return (
    <section className="dev-tools" ref={devToolsRef}>
      <BackwardArrow />
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
      <ScrollButtons
        topScrollClick={() => handleScroll("up")}
        bottomScrollClick={() => handleScroll("down")}
      />
    </section>
  );
};

export default React.memo(DeveloperPage);
