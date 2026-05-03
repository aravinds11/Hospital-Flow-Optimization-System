import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          At the core of our system is a commitment to making healthcare more efficient, accessible, and patient-centered. We understand that time is critical in medical care, and long waiting periods can impact both patient experience and outcomes.

          Our Hospital Flow Optimization System is designed to streamline patient movement, reduce waiting times, and ensure that every individual receives timely attention. By enabling real-time coordination between patients, doctors, and hospital resources, we help create a smoother, more reliable healthcare experience.

          Because better flow means better care.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
