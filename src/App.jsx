import "./App.css";
import MainPage from "./Pages/MainPage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeveloperPage from "./Pages/DeveloperPage/DevTools";
import FrontendPage from "./Pages/FrontendPage/FrontendPage";
import DesignPortfolio from "./Pages/DesignPortfolio/DesignPortfolio";
import AboutMe from "./Pages/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
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
