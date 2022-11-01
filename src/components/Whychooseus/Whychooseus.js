import React from "react";
import "./Whychooseus.scss";
import RowIcon1 from "./Choose-Images/Choose-RowIcon1.svg";
import RowIcon2 from "./Choose-Images/Choose-RowIcon2.svg";
import RowIcon3 from "./Choose-Images/Choose-RowIcon3.svg";

const Whychooseus = () => {
  return (
    <>
      <div className="Choose-container">
        <div className="Choose-header">
          <div className="Choose-span">
            <span className="Choose-header-1">OUR FEATURES</span>
          </div>
          <h2 className="Choose-header-2">Why Choose Us</h2>
          <p className="Choose-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>
        <div className="Choose-blocks">
          <div className="Choose-rows" id="Choose-live-block">
            <img className="Choose-icons" src={RowIcon1} alt="RowIcon1" />
            <h6 className="Choose-block-head">Go Live in Minutes</h6>
            <p className="Choose-block-content">
              Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,
              maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.
            </p>
          </div>
          <div className="Choose-rows" id="Choose-service-block">
            <img className="Choose-icons" src={RowIcon2} alt="RowIcon2" />
            <h6 className="Choose-block-head">Manage like A Pro</h6>
            <p className="Choose-block-content">
              Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,
              maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.
            </p>
          </div>
          <div className="Choose-rows" id="Choose-scale-block">
            <img className="Choose-icons" src={RowIcon3} alt="RowIcon3" />
            <h6 className="Choose-block-head">Scale to Success</h6>
            <p className="Choose-block-content">
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
