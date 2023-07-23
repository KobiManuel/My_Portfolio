import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../../Context/context";
import banner from "../../../Components/FrontendSection/images/banner3.jpg";
import PageHeader from "../../../UI/PageHeader/PageHeader";

const Hero = ({ id }) => {
  const { setHeroCard } = useContext(PortfolioContext);
  const DevtoolsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeroCard(true);
        } else {
          setHeroCard(false);
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
  }, [setHeroCard]);

  return (
    <section
      id={id}
      className="frontend-page__hero"
      ref={DevtoolsRef}
      style={{ zIndex: "800000000" }}
    >
      <PageHeader
        title1={"Frontend Dev"}
        title2={"Projects"}
        stack={"Frontend Development"}
        banner={banner}
      />
    </section>
  );
};

export default Hero;
