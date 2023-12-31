import React, { useEffect, useRef } from "react";
import banner from "../../assets/images/designSection.jpg";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { setThirdCard } from "../../Context/portfolioSlice";

const DesignPage = () => {
  const thirdCard = useSelector((state) => state.portfolio.thirdCard);

  const dispatch = useDispatch();
  const designSectionRef = useRef(null);
  // console.log("dESIGN SECTION !!!!");

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
    const target = designSectionRef.current;

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
    <section className="design-section" ref={designSectionRef}>
      <ProjectCard
        title1="Design & Art"
        title2="Portfolio"
        description="Visual Design"
        Image={banner}
        hoverColor="#012c3a"
        link={"/projects/artPortfolio"}
        isVisible={thirdCard}
      />
    </section>
  );
};

export default React.memo(DesignPage);
