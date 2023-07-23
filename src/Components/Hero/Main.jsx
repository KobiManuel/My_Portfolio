import React, { useContext, useEffect, useRef } from "react";
import "./_Main.scss";
import { PortfolioContext } from "../../Context/context";

const Hero = () => {
  const { heroCard, setHeroCard } = useContext(PortfolioContext);
  const heroRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  useEffect(() => {
    const heroNode = heroRef.current;
    const cardNode1 = cardRef1.current;
    const cardNode2 = cardRef2.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroCard(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(heroNode);
    observer.observe(cardNode1);
    observer.observe(cardNode2);

    return () => {
      observer.unobserve(heroNode);
      observer.unobserve(cardNode1);
      observer.unobserve(cardNode2);
    };
  });

  return (
    <section className="hero" ref={heroRef}>
      <div
        className={`project-card ${
          heroCard ? "visible" : ""
        } animate-from-left`}
        ref={cardRef1}
      >
        <h3>Kobi</h3>
        <h3>Manuel</h3>
        <span></span>
        <p>Frontend Engineer / Visual Artist</p>
      </div>
      <div
        className={`project-card ${
          heroCard ? "visible" : ""
        } animate-from-right`}
        ref={cardRef2}
      >
        <h6>Portfolio</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400"
          height="400"
          viewBox="-1.2 -1.2 2.2 2.2"
        >
          <g
            fill="hsla(203, 85%, 95%, .01)"
            stroke="hsla(255,255%,255%,.12)"
            stroke-width="0.01"
          >
            <circle r="1" />

            <g id="grid">
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-1.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-1.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-2.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-2.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-4.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-4.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-5.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-5.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-6.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-6.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-7.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-7.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-8.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-8.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-9.0s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-9.5s"
                  dur="10s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.64 0 0.36 1"
                />
              </path>
            </g>
            <use xlinkHref="#grid" transform="rotate(90)" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
