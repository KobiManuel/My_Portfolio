import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../../Context/context";
import banner from "../../../Components/FrontendSection/images/banner2.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

const ReactMeals = ({ id }) => {
  const { setThirdCard } = useContext(PortfolioContext);
  const ReactMealsRef = useRef(null);

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
    const target = ReactMealsRef.current;

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
      className="ReactMeals"
      ref={ReactMealsRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="React Meals"
        title2="Website"
        description="Frontend Development"
        Image={banner}
        hoverColor="#012c3a"
        link={"https://ReactMeals.co/"}
        homepage={false}
      />
    </section>
  );
};

export default ReactMeals;
