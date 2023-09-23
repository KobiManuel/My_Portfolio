import React, { useEffect, useRef } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import developer from "../../assets/images/developerSection.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setFirstCard } from "../../Context/portfolioSlice";

const DeveloperSection = ({ id }) => {
  const firstCard = useSelector((state) => state.portfolio.firstCard);
  const dispatch = useDispatch();

  const developerSectionRef = useRef(null);
  // console.log("dEVELOPER SECTION !!!!");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setFirstCard(entry.isIntersecting));
        } else {
          dispatch(setFirstCard(false));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = developerSectionRef.current;

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
      className="developer-section"
      ref={developerSectionRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="A.I & Developer"
        title2="Tools"
        description="Fullstack development"
        Image={developer}
        hoverColor="#012c3a"
        link={"/projects/developer"}
        isVisible={firstCard}
      />
    </section>
  );
};

export default React.memo(DeveloperSection);
