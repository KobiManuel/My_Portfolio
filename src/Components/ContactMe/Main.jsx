import React, { useEffect, useRef } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import developer from "./images/banner.jpg";
import { useDispatch } from "react-redux";
import { setFifthCard } from "../../Context/portfolioSlice";

const ContactMe = () => {
  const ContactMeRef = useRef(null);
  const dispatch = useDispatch();
  console.log("CONTACT ME !!!!");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setFifthCard(entry.isIntersecting));
        } else {
          dispatch(setFifthCard(false));
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
