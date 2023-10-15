import React, { useEffect, useRef } from "react";
import codex from "../../../assets/images/lunacodex1.png";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { setFirstCard } from "../../../Context/portfolioSlice";

const LunaCodex = ({ id }) => {
  const firstCard = useSelector((state) => state.portfolio.firstCard);

  const dispatch = useDispatch();
  const lunaCodexRef = useRef(null);

  // console.log("lunacodex");

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
    const target = lunaCodexRef.current;

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
      className="lunaCodex"
      ref={lunaCodexRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="L.U.N.A"
        title2="Neural Assistant"
        description="Fullstack development"
        Image={codex}
        hoverColor="#012c3a"
        link={"https://luna-codex.web.app/"}
        homepage={false}
        isVisible={firstCard}
        // objectFit={"contain"}
      />
    </section>
  );
};

export default React.memo(LunaCodex);
