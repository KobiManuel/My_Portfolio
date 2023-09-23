import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSecondCard } from "../../../Context/portfolioSlice";
import banner from "../../../Components/FrontendSection/images/banner3.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

const SapaWeb = ({ id }) => {
  const secondCard = useSelector((state) => state.portfolio.secondCard);

  const dispatch = useDispatch();
  const SapaWebRef = useRef(null);

  // console.log("sapa-web");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8,
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
    const target = SapaWebRef.current;

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
      className="SapaWeb"
      ref={SapaWebRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="Sapa Web"
        title2="App"
        description="Frontend Development"
        Image={banner}
        hoverColor="#012c3a"
        link={"https://trysapa.com/"}
        homepage={false}
        isVisible={secondCard}
      />
    </section>
  );
};

export default React.memo(SapaWeb);
