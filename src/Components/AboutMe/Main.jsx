import React, { useContext, useEffect, useRef } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import developer from "./images/banner.jpg";
import { PortfolioContext } from "../../Context/context";

const AboutMe = () => {
  const { setFourthCard } = useContext(PortfolioContext);
  const AboutMeRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFourthCard(true);
        } else {
          setFourthCard(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = AboutMeRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [setFourthCard]);

  return (
    <section className="developer-section" ref={AboutMeRef}>
      <ProjectCard
        title1="About Me"
        description="Evidently Creative and Poetic in a way that seems not to be of this earth"
        Image={developer}
        hoverColor="#012c3a"
        link={"/aboutMe"}
      />
    </section>
  );
};

export default AboutMe;
