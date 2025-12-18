import React, { useEffect, useRef } from "react";
import banner from "../../../assets/images/eazigifting-banner.png";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { setFourthCard } from "../../../Context/portfolioSlice";

const EaziGifting = ({ id }) => {
  const fourthCard = useSelector((state) => state.portfolio.fourthCard);

  const dispatch = useDispatch();
  const eazigiftingRef = useRef(null);

  // console.log("rect-meals");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setFourthCard(entry.isIntersecting));
        } else {
          dispatch(setFourthCard(false));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = eazigiftingRef.current;

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
      className="EaziGifting"
      ref={eazigiftingRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="Eazi Gifting"
        title2="Web App"
        description="Frontend Development"
        Image={banner}
        hoverColor="#012c3a"
        link={"https://www.eazigifting.com/"}
        homepage={false}
        isVisible={fourthCard}
      />
    </section>
  );
};

export default React.memo(EaziGifting);
