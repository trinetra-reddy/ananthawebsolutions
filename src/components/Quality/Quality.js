import React from "react";
import "./Quality.scss";
import sideimage from "./img.png";
import meetUps from "../../icons/Meetups.png";
import target from "../../icons/Target.png";
import customer from "../../icons/Customer.png";
import marketing from "../../icons/Marketing.png";

const Quality = () => {
  return (
    <>
      <div className="quality-main">
        <div className="quality-left">
          <div className="quality-heading">ABOUT US</div>
          <div className="quality-sub-heading-1">
               We Want Your Application
          </div>
          <div className="quality-sub-heading-1">
               to Have Best Quality Possible
          </div>
          <div className="quality-card">
            <div className="quality-block">
              <img
                className="quality-icons"
                src={customer}
                alt="customerIcon"
              />

              <h4 id="quality-h4">Business-Oriented Software</h4>
              <p id="quality-p">
                Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.
              </p>
            </div>
            <div className="quality-block">
              <img className="quality-icons" src={target} alt="targetIcon" />
              <h4 id="quality-h4">Excellent Price-Quality Ratio</h4>

              <p id="quality-p">
                Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.
              </p>
            </div>
          </div>
          <div className="quality-card">
            <div className="quality-block">
              <img className="quality-icons" src={meetUps} alt="meetUpIcon" />
              <h4 id="quality-h4">Meetups for Developers </h4>
              <p id="quality-p">
                Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.
              </p>
            </div>
            <div className="quality-block">
              <img
                className="quality-icons"
                src={marketing}
                alt="MarketingIcon"
              />
              <h4 id="quality-h4">Agile Responsible Development</h4>
              <p id="quality-p">
                Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.
              </p>
            </div>
          </div>
        </div>

        <div className="quality-right">
          <img className="quality-img" src={sideimage} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Quality;
