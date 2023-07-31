import React, { useEffect, useRef } from "react";
import banner from "../../../Components/FrontendSection/images/banner2.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import { useDispatch } from "react-redux";
import { setThirdCard } from "../../../Context/portfolioSlice";

const ReactMeals = ({ id }) => {
  const dispatch = useDispatch();
  const ReactMealsRef = useRef(null);

  // console.log("rect-meals");

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
    const target = ReactMealsRef.current;

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

export default React.memo(ReactMeals);
