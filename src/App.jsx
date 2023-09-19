import "./App.css";
import MainPage from "./Pages/MainPage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeveloperPage from "./Pages/DeveloperPage/DevTools";
import FrontendPage from "./Pages/FrontendPage/FrontendPage";
import DesignPortfolio from "./Pages/DesignPortfolio/DesignPortfolio";
import AboutMe from "./Pages/AboutMe/AboutMe";
import { useEffect, useRef } from "react";

function App() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const offsetX = ((clientX / window.innerWidth) * 60).toFixed(2);
      const offsetY = ((clientY / window.innerHeight) * 60).toFixed(2);

      container.style.setProperty(
        "background-position",
        `calc(130% + ${offsetX}px) calc(50% + ${offsetY}px)`
      );
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App" ref={containerRef}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects/developer" element={<DeveloperPage />} />
          <Route path="/projects/frontend" element={<FrontendPage />} />
          <Route path="/projects/artPortfolio" element={<DesignPortfolio />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
