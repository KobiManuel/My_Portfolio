import React, { useEffect, useRef } from "react";
import "./_Main.scss";
import { useDispatch, useSelector } from "react-redux";
import { setHeroCard } from "../../Context/portfolioSlice";

const Hero = () => {
  const heroCard = useSelector((state) => state.portfolio.heroCard);
  const mouseXOffset = useSelector((state) => state.portfolio.mouseXOffset);
  const mouseYOffset = useSelector((state) => state.portfolio.mouseYOffset);
  const dispatch = useDispatch();
  const heroRef = useRef(null);
  // console.log("HERO SECTION !!!!");

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
    const target = heroRef.current;

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
    <section className="hero" ref={heroRef}>
      <div
        className={`hero-card ${heroCard ? "visible" : ""} animate-from-left`}
      >
        <h3>Kobi</h3>
        <h3>Manuel</h3>
        <span></span>
        <p>Frontend Engineer / Visual Artist</p>
      </div>
      <div
        className={`hero-card ${heroCard ? "visible" : ""} animate-from-right`}
        style={{
          transform: `translateX(${mouseXOffset}px) translateY(${mouseYOffset}px)`,
        }}
      >
        <h6>Portfolio</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="500"
          height="500"
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

export default React.memo(Hero);
