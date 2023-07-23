import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../../Context/context";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import banner from "./images/banner.png";

const SvgConverter = ({ id }) => {
  const { setThirdCard } = useContext(PortfolioContext);
  const SvgConverterRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setThirdCard(true);
        } else {
          setThirdCard(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = SvgConverterRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [setThirdCard]);

  return (
    <section
      id={id}
      className="SvgConverter"
      ref={SvgConverterRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="Svg to Jsx"
        title2="Converter"
        description="Frontend Development"
        Image={banner}
        hoverColor="#012c3a"
        link={"/"}
        homepage={false}
      />
    </section>
  );
};

export default SvgConverter;
