import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../../Context/context";
import banner from "../../../Components/FrontendSection/images/banner2.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

const SapaAdmin = ({ id }) => {
  const { setSecondCard } = useContext(PortfolioContext);
  const SapaAdminRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecondCard(true);
        } else {
          setSecondCard(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = SapaAdminRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [setSecondCard]);

  return (
    <section
      id={id}
      className="SapaAdmin"
      ref={SapaAdminRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="Sapa Admin"
        title2="Dashboard"
        description="Frontend Development"
        Image={banner}
        hoverColor="#012c3a"
        link={"https://SapaAdmin.co/"}
        homepage={false}
      />
    </section>
  );
};

export default SapaAdmin;
