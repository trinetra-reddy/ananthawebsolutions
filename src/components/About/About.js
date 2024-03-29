import React from "react";
import "./About.scss";
import about from "./about.png";

const About = () => {
  return (
    <>
      <div className="about-main">
        <div>
          <img className="about-img" src={about} alt="About us" />
        </div>
        <div className="about-content">
          <div>
            <h5 className="about-heading">ABOUT US</h5>
            <div className="content-wrapper">
              We are the Pioneers Of IT Development
            </div>
            <p className="text">
              Sed lobortis vehicula eros.In efficitur,mi ac phareta
              suscipit,lectus est elementum ligula, in dictum odio urna
              velnulla.Curabitur viverra sed velit quis viverra.Sed eget viverra
              tellus. Maecenas sollicitudin nisl nibh, euullamcorper erat
              convillas vel.Morbi feugiat commodo elit eu dictum.{" "}
            </p>
          </div>
          <div className="flex">
            <div className="num-box-item">
              <div className="about-count">124</div>
              <div className="about-text">Projects</div>
            </div>
            <div className="num-box-item">
              <div className="about-count">97</div>
              <div className="about-text">clients</div>
            </div>
            <div>
              <div className="about-count">105</div>
              <div className="about-text">employee</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
