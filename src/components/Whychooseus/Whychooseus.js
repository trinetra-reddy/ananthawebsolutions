import React from "react";
import "./Whychooseus.scss";
import Icon1 from "./Icon1.svg";
import Icon2 from "./Icon2.svg";
import Icon3 from "./Icon3.svg";

const Whychooseus = () => {
  return (
    <>
      <div class="container">
        <div class="header">
          <h3 class="header-1">OUR FEATURES</h3>
          <h1 class="header-2">Why Choose Us</h1>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>
        <div class="divisions">
          <div class="live">
            <img class="image" src={Icon1} alt="Time" />
            <h6 class="box-head">Go Live in Minutes</h6>
            <p class="content">
              Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,
              maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.
            </p>
          </div>
          <div class="service">
            <img class="image" src={Icon2} alt="Pro" />
            <h6 class="box-head">Manage like A Pro</h6>
            <p class="content">
              Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,
              maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.
            </p>
          </div>
          <div class="scale">
            <img class="image" src={Icon3} alt="Scale" />
            <h6 class="box-head">Scale to Success</h6>
            <p class="content">
              Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,
              maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Whychooseus;
