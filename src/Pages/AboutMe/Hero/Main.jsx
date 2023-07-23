import React from "react";
import banner from "../../../Components/AboutMe/images/banner.jpg";
import PageHeader from "../../../UI/PageHeader/PageHeader";

const Hero = ({ id }) => {
  return (
    <section id={id} className="aboutMe__hero">
      <PageHeader
        title1={"About Me"}
        stack={
          "Evidently Creative and Poetic in a way that seems not to be of this earth"
        }
        banner={banner}
      />
    </section>
  );
};

export default Hero;
