import React, { useEffect, useRef } from "react";
import banner from "./images/AI post blog.jpg";
import PageHeader from "../../../UI/PageHeader/PageHeader";
import { useDispatch } from "react-redux";
import { setHeroCard } from "../../../Context/portfolioSlice";

const Hero = ({ id }) => {
  const dispatch = useDispatch();
  const DevtoolsRef = useRef(null);

  // console.log("hero");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setHeroCard(entry.isIntersecting));
        } else {
          dispatch(setHeroCard(false));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = DevtoolsRef.current;

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
      className="developer-page"
      ref={DevtoolsRef}
      style={{ zIndex: "800000000" }}
    >
      <PageHeader
        title1={"A.I & Developer"}
        title2={"Tools"}
        stack={"Artificial Intelligence & Developer tools"}
        banner={banner}
      />
    </section>
  );
};

export default React.memo(Hero);
