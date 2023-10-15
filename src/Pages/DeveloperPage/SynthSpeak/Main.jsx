import React, { useEffect, useRef } from "react";
import codex from "../../../assets/images/synthspeak.png";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { setSecondCard } from "../../../Context/portfolioSlice";

const SynthSpeak = ({ id }) => {
  const secondCard = useSelector((state) => state.portfolio.secondCard);

  const dispatch = useDispatch();
  const synthSpeakRef = useRef(null);
  // console.log("synthspeak");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setSecondCard(entry.isIntersecting));
        } else {
          dispatch(setSecondCard(false));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = synthSpeakRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      id={id}
      className="synthspeak-section"
      ref={synthSpeakRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="SynthSpeak"
        title2="Article Summarizer"
        description="Fullstack development"
        Image={codex}
        hoverColor="#012c3a"
        link={"https://synthspeak.web.app/"}
        homepage={false}
        isVisible={secondCard}
        // objectFit={"contain"}
      />
    </section>
  );
};

export default React.memo(SynthSpeak);
