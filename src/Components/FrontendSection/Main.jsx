import React, { useContext, useEffect, useRef } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import banner from "./images/banner3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setSecondCard } from "../../Context/portfolioSlice";

const FrontendSection = () => {
  const dispatch = useDispatch();
  const frontendSectionRef = useRef(null);
  console.log("FRONTEND SECTION !!!!");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
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
    const target = frontendSectionRef.current;

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
    <section className="frontend-section" ref={frontendSectionRef}>
      <ProjectCard
        title1="Frontend Dev"
        title2="Projects"
        description="Frontend development"
        Image={banner}
        hoverColor="#012c5a"
        link={"/projects/frontend"}
      />
    </section>
  );
};

export default FrontendSection;
