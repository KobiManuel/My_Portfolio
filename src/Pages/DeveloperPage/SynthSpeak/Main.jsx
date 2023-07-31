import React, { useEffect, useRef } from "react";
import codex from "../../../Components/DeveloperSection/images/A.I.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import { useDispatch } from "react-redux";
import { setSecondCard } from "../../../Context/portfolioSlice";

const SynthSpeak = ({ id }) => {
  const dispatch = useDispatch();
  const synthSpeakRef = useRef(null);

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
        link={"/"}
        homepage={false}
      />
    </section>
  );
};

export default SynthSpeak;
