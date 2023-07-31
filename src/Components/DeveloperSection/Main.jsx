import React, { useEffect, useRef, useReducer } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import developer from "./images/AI post blog.jpg";
import { useDispatch } from "react-redux";
import { setFirstCard } from "../../Context/portfolioSlice";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CARD_PROPERTIES":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const DeveloperSection = ({ id }) => {
  const dispatch = useDispatch();
  const [state, dispatchState] = useReducer(reducer, {
    height: "",
    width: "",
    position: "",
  });
  const developerSectionRef = useRef(null);
  console.log("dEVELOPER SECTION !!!!");

  useEffect(() => {
    console.log("running observer");
    const observerOptions = {
      threshold: 0.8,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setFirstCard(entry.isIntersecting));
        } else {
          dispatch(setFirstCard(entry.isIntersecting));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = developerSectionRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const handlePageChange = () => {
    dispatchState({
      type: "SET_CARD_PROPERTIES",
      payload: {
        height: "100%",
        position: "absolute",
        width: "70%",
      },
    });
  };

  return (
    <section
      id={id}
      className="developer-section"
      ref={developerSectionRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="A.I & Developer"
        title2="Tools"
        description="Fullstack development"
        Image={developer}
        hoverColor="#012c3a"
        onClick={handlePageChange}
        height={state.height}
        width={state.width}
        position={state.position}
        link={"/projects/developer"}
      />
    </section>
  );
};

export default DeveloperSection;
