import React from "react";
import "./_DesignPortfolio.scss";
import Hero from "./Hero/Main";

const DesignPortfolio = () => {
  return (
    <section className="dev-tools">
      <div className="fixed" style={{display: "none"}}>
        <div
        >
          <p>Scroll </p>
          <p></p>
          <p> down</p>

          <p>→</p>
        </div>
      </div>
      <div className="devtool-pages">
        <Hero />
      </div>
    </section>
  );
};

export default DesignPortfolio;
