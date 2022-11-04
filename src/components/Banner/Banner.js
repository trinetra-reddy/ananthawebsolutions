import React, { Fragment } from "react";
import "./Banner.scss";
import banner from "./banner.svg";

const Banner = () => {
  return (
    <>
      <div className="banner-text">
        <div className="banner-main">
          <div className="banner-content1">
            <div className="banner-left-text">There is More Than Just</div>
            <div className="banner-wrapper">
            <div className="banner-left-text">Software</div>
            <div className="banner-left-text-wrapper">Development</div>
            </div>
          </div>
          <p className="banner-text-wrapper">
            Thirteen new services will help solve machine learning problems
          </p>
          <button className="banner-work-button">Work With Us</button>
          <button className="banner-read-button">Read More</button>
        </div>
        <div>
          <img className="banner-img" src={banner} alt="WEB" />
        </div>
      </div>
    </>
  );
};

export default Banner;
