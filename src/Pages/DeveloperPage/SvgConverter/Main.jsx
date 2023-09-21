import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThirdCard } from "../../../Context/portfolioSlice";

import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import banner from "./images/banner.png";

// console.log("svgconverter");

const SvgConverter = ({ id }) => {
  const thirdCard = useSelector((state) => state.portfolio.thirdCard);

  const dispatch = useDispatch();
  const SvgConverterRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setThirdCard(entry.isIntersecting));
        } else {
          dispatch(setThirdCard(false));
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
  }, []);

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
        isVisible={thirdCard}
      />
    </section>
  );
};

export default React.memo(SvgConverter);
