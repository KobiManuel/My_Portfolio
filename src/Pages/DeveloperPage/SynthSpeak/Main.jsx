import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../../Context/context";
import codex from "../../../Components/DeveloperSection/images/A.I.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

const SynthSpeak = ({ id }) => {
  const { setSecondCard } = useContext(PortfolioContext);
  const synthSpeakRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecondCard(true);
        } else {
          setSecondCard(false);
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
  }, [setSecondCard]);

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
        link={"/"}
        homepage={false}
      />
    </section>
  );
};

export default SynthSpeak;
