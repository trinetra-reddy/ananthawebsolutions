import React from "react";
import "./Contactus.scss";
import ContactMap from "./Contactus-images/Contactus-Map.svg";
import CallerIcon from "./Contactus-images/CallerIcon.svg";
import MessageIcon from "./Contactus-images/MessageIcon.svg";

const Contactus = () => {
  return (
    <>
      <div className="Contactus-container">
        <div className="Contactus-header">
          <h2 className="Contactus-header1">Contacts</h2>
          <h6 className="Contactus-header2">Home/Contacts</h6>
        </div>
        <div className="Contactus-form">
          <div className="Contactus-form1">
            <input
              className="Contactus-input"
              id="Contactus-input1"
              type="text"
              placeholder="Your Full Name"
            />
            <input
              className="Contactus-input"
              id="Contactus-input2"
              type="email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="Contactus-form2">
            <input
              className="Contactus-input"
              id="Contactus-input3"
              type="text"
              placeholder="Your Phone Number"
            />
            <input
              className="Contactus-input"
              id="Contactus-input4"
              type="text"
              placeholder="Your Address"
            />
          </div>
          <div className="Contactus-form3">
            <input
              className="Contactus-input"
              id="Contactus-input5"
              type="text"
              placeholder="Enter Your Message Here..."
            />
          </div>
          <button className="Contactus-button" type="submit" click="OnClick">
            Submit Message
          </button>
        </div>
        <div className="Contactus-company-info">
          <div className="Contactus-map">
            <img src={ContactMap} alt="Contact Map" />
          </div>
          <div className="Contactus-footer-wrapper">
            <div className="Contactus-address-wrapper1">
              <h6 className="Contactus-address-headers">COMPANY ADDRESS</h6>
              <p className="Contactus-location-content">
                ThemeForest,Envato HQ 24 Fifth st., Los Angeles, USA
              </p>
            </div>
            <div className="Contactus-address-wrapper2">
              <h6 className="Contactus-address-headers">COMPANY PHONES</h6>
              <img
                className="Contactus-caller-icon"
                src={CallerIcon}
                alt="Caller Icon"
              />
              <ul className="Contactus-list">
                <li>1234-1234-1234</li>
                <li>1234-1234-1234</li>
              </ul>
            </div>
            <div className="Contactus-address-wrapper3">
              <h6 className="Contactus-address-headers">COMPANY EMAILS</h6>
              <img
                className="Contactus-message-icon"
                src={MessageIcon}
                alt="Message Icon"
              />
              <ul className="Contactus-list">
                <li>contactus@gmail.com</li>
                <li>ananthawebsolutions@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
