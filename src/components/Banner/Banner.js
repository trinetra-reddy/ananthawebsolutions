import React, { Fragment } from "react";
import "./Banner.scss";
import banner from "./banner.svg";

const Banner = () => {
  return (
    <>
      <div className="banner-text">
        <div className="main">
          <div className="content1">
            <span className="left-text">There is More Than Just Software</span>
            <span className="left-text-wrapper">Development</span>
          </div>
          <p className="text-wrapper">
            Thirteen new services will help solve machine learning problems
          </p>
          <button className="work-button">Work With Us</button>
          <button className="read-button">Read More</button>
        </div>
        <div>
          <img src={banner} alt="WEB" />
        </div>
      </div>
    </>
  );
};

export default Banner;
