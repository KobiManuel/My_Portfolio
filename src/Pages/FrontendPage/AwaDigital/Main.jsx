import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../../Context/context";
import banner from "../../../Components/FrontendSection/images/banner2.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

const AwaDigital = ({ id }) => {
  const { setFirstCard } = useContext(PortfolioContext);
  const AwaDigitalRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFirstCard(true);
        } else {
          setFirstCard(false);
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
  }, [setFirstCard]);

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
