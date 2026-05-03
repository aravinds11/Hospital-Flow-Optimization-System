import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              We are committed to delivering high-quality, patient-centered care through efficiency, reliability, and innovation. We recognize that timely access to healthcare is essential, and minimizing wait times is a critical part of improving patient outcomes and overall experience.

              HealthBooker has been designed to enhance coordination across departments, streamline patient movement, and ensure that every individual receives prompt and organized care. With a focus on continuous improvement and operational excellence, we strive to make every visit smoother, faster, and more effective.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
