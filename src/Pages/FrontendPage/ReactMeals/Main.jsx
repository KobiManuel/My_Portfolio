import React, { useEffect, useRef } from "react";
import banner from "../../../assets/images/jazzyburger.png";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { setThirdCard } from "../../../Context/portfolioSlice";

const ReactMeals = ({ id }) => {
  const thirdCard = useSelector((state) => state.portfolio.thirdCard);

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
        title1="Jazzys Burger"
        title2="Website"
        description="Frontend Development"
        Image={banner}
        hoverColor="#012c3a"
        link={"https://www.jazzysburger.com/"}
        homepage={false}
        isVisible={thirdCard}
      />
    </section>
  );
};

export default React.memo(ReactMeals);
