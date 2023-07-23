import React from 'react'
import Hero from './Hero/Main';

const AboutMe = () => {
  return (
    <section className="dev-tools">
      <div className="fixed" style={{ display: "none" }}>
        <div>
          <p>Scroll </p>
          <p></p>
          <p> down</p>

          <p>→</p>
        </div>
      </div>
      <div className="devtools-pages">
        <Hero />
      </div>
    </section>
  );
}

export default AboutMe