import React, { useEffect, useRef, useState } from "react";
import "./_ProjectCard.scss";
import { Link } from "react-router-dom";
const ProjectCard = ({
  title1,
  title2,
  description,
  Image,
  hoverColor,
  showContact,
  link,
  onClick,
  position,
  height,
  width,
  homepage
}) => {
  const heroRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  

  const buttonStyle = {
    backgroundColor: isHovered && hoverColor,
  };

  const handleEmailButtonClick = () => {
    const email = "emmakobi91@gmail.com";
    const subject = "Hi, would you be interested in working with me?";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoUrl;
  };

  useEffect(() => {
    const heroNode = heroRef.current;
    const cardNode1 = cardRef1.current;
    const cardNode2 = cardRef2.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroNode);
    observer.observe(cardNode1);
    observer.observe(cardNode2);

    return () => {
      observer.unobserve(heroNode);
      observer.unobserve(cardNode1);
      observer.unobserve(cardNode2);
    };
  }, [isVisible]);

  return (
    <div className="card" ref={heroRef}>
      <div
        className={`project-card ${
          isVisible ? "visible" : ""
        } animate-from-left`}
        ref={cardRef1}
      >
        <span>
          <h3>{title1}</h3>
          <h3>{title2}</h3>
        </span>
        <span></span>
        {showContact ? (
          <>
            <p className="email-text" onClick={handleEmailButtonClick}>emmakobi91@gmail.com</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://twitter.com/KobiManuell" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              </a>
               <a href="https://github.com/KobiManuel" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              </a>
            </div>
          </>
        ) : (
          <>
            <p>{description}</p>
            {homepage ? (
              <Link
                to={link}
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
              >
                Show Me More
              </Link>
            ) : (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Launch Project
              </a>
            )}
          </>
        )}
      </div>
      <div
        className={`project-card ${
          isVisible ? "visible blue-bg" : ""
        } animate-from-right`}
        style={{ position: position, height: height, width: width }}
        ref={cardRef2}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={Image}
          className={`image ${isVisible ? "visible" : ""} animate-to-right`}
          alt="project background"
        />
        {hovered && (
          <>
            <div className="ripple-1"></div>
            <div className="ripple-2"></div>
            <div className="ripple-3"></div>
            <div className="ripple-4"></div>
            <div className="ripple-5"></div>
          </>
        )}
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  showContact: false,
  homepage: true
};

export default ProjectCard;
