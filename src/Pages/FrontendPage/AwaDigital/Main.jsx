import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setFirstCard } from "../../../Context/portfolioSlice";
import banner from "../../../Components/FrontendSection/images/banner2.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

const AwaDigital = ({ id }) => {
  const dispatch = useDispatch();
  const AwaDigitalRef = useRef(null);

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
    const target = AwaDigitalRef.current;

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
      className="AwaDigital"
      ref={AwaDigitalRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="Awa Digital"
        title2="Website"
        description="Frontend Development"
        Image={banner}
        hoverColor="#012c3a"
        link={"https://awadigital.co/"}
        homepage={false}
      />
    </section>
  );
};

export default AwaDigital;
