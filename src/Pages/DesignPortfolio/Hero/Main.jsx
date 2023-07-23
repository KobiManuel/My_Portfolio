import React from "react";
import banner from "../../../Components/DesignPage/images/banner.jpg";
import PageHeader from "../../../UI/PageHeader/PageHeader";

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="Design-portfolio__hero"
    >
      <PageHeader
        title1={"Design & Art"}
        title2={"Portfolio"}
        stack={"Visual Design & Illustration"}
        banner={banner}
      />
    </section>
  );
};

export default Hero;
