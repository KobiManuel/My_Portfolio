import React, { useContext, useEffect, useRef } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import developer from "../../assets/images/aboutMeSection.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setFourthCard } from "../../Context/portfolioSlice";

const AboutMe = () => {
  const fourthCard = useSelector((state) => state.portfolio.fourthCard);

  const dispatch = useDispatch();
  const AboutMeRef = useRef(null);
  // console.log("ABOUT ME !!");

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
    const target = AboutMeRef.current;

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
    <section className="developer-section" ref={AboutMeRef}>
      <ProjectCard
        title1="About Me"
        title2="****"
        description="Evidently Creative and Poetic in a way that seems not to be of this earth"
        Image={developer}
        hoverColor="#012c3a"
        link={"/aboutMe"}
        isVisible={fourthCard}
      />
    </section>
  );
};

export default React.memo(AboutMe);
