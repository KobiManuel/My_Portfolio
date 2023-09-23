import "./App.css";
import MainPage from "./Pages/MainPage/Main";
import { Routes, Route } from "react-router-dom";
import DeveloperPage from "./Pages/DeveloperPage/DevTools";
import FrontendPage from "./Pages/FrontendPage/FrontendPage";
import DesignPortfolio from "./Pages/DesignPortfolio/DesignPortfolio";
import AboutMe from "./Pages/AboutMe/AboutMe";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMouseXOffset, setMouseYOffset } from "./Context/portfolioSlice";

function App() {
  const heroCard = useSelector((state) => state.portfolio.heroCard);
  const dispatch = useDispatch();

  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      if (window.innerWidth > 1000 && heroCard) {
        const offsetX = ((clientX / window.innerWidth) * 60).toFixed(2);
        const offsetY = ((clientY / window.innerHeight) * 60).toFixed(2);

        container.style.setProperty(
          "background-position",
          `calc(130% + ${offsetX}px) calc(50% + ${offsetY}px)`
        );

        // Dispatch actions to update mouse offsets in Redux state
        dispatch(setMouseXOffset(offsetX));
        dispatch(setMouseYOffset(offsetY));
      } else {
        // Reset the mouseX and mouseY offsets when heroCard is false
        container.style.setProperty("background-position", "130%");
        dispatch(setMouseXOffset("0"));
        dispatch(setMouseYOffset("0"));
      }
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dispatch, heroCard]);

  return (
    <div className="App" ref={containerRef}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/developer" element={<DeveloperPage />} />
        <Route path="/projects/frontend" element={<FrontendPage />} />
        <Route path="/projects/artPortfolio" element={<DesignPortfolio />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
