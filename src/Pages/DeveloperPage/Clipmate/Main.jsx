import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFirstCard } from "../../../Context/portfolioSlice";
import banner from "../../../assets/images/climate-banner-1.png";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

const ClipMate = ({ id }) => {
  const firstCard = useSelector((state) => state.portfolio.firstCard);

  const dispatch = useDispatch();
  const clipmateRef = useRef(null);

  // console.log("sapa-web");

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
    const target = clipmateRef.current;

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
      className="ClipMate"
      ref={clipmateRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="ClipMate"
        title2="Web App"
        description="Frontend Development"
        Image={banner}
        hoverColor="#012c3a"
        link={"https://clipmate-home-v1.vercel.app/"}
        homepage={false}
        isVisible={firstCard}
      />
    </section>
  );
};

export default React.memo(ClipMate);
