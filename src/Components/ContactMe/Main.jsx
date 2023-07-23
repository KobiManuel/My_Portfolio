import React, { useContext, useEffect, useRef } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import developer from "./images/banner.jpg";
import { PortfolioContext } from "../../Context/context";

const ContactMe = () => {
  const { setFifthCard } = useContext(PortfolioContext);
  const ContactMeRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFifthCard(true);
        } else {
          setFifthCard(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = ContactMeRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [setFifthCard]);

  return (
    <section className="developer-section" ref={ContactMeRef}>
      <ProjectCard
        title1="Get In Touch"
        showContact
        Image={developer}
        hoverColor="#012c3a"
      />
    </section>
  );
};

export default ContactMe;
