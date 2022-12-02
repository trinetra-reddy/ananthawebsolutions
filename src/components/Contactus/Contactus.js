import React from "react";
import "./Contactus.scss";
import CallerIcon from "./Contactus-images/CallerIcon.svg";
import MessageIcon from "./Contactus-images/MessageIcon.svg";
import ContactusVector from "./Contactus-images/ContactusVector.svg";
import { Link } from "react-router-dom";

const Contactus = () => {
  return (
    <>
      <div className="Contactus-container">
        <div className="Contactus-header">
          <h2 className="Contactus-header1">Contact Us</h2>
          <Link className="Contactus-header2" to="/">
            Home/
          </Link>
          <Link className="Contactus-header2" to="/contact-us">
            Contact Us
          </Link>
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
          <button className="Contactus-button" type="submit">
            Submit Message
            <img
              className="Contactus-vectorImage"
              src={ContactusVector}
              alt="VectorImage"
            />
          </button>
        </div>
        <div className="Contactus-company-info">
          <div className="Contactus-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.1688261186528!2d77.53443313587825!3d14.6469047904435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb135a1a082c657%3A0x1924ed05e2103a21!2sAlamur%2C%20Kakkalapalle%20Rural%2C%20Andhra%20Pradesh%20515002%2C%20India!5e0!3m2!1sen!2sus!4v1668018257685!5m2!1sen!2sus"></iframe>
          </div>
          <div className="Contactus-footer-wrapper">
            <div className="Contactus-address-wrapper">
              <h6 className="Contactus-address-headers">COMPANY ADDRESS</h6>
              <p className="Contactus-location-content">
                ThemeForest,Envato HQ 24 Fifth st., Los Angeles, USA
              </p>
            </div>
            <div className="Contactus-address-wrapper">
              <h6 className="Contactus-address-headers">COMPANY PHONES</h6>
              <img
                className="Contactus-icons"
                id="Contactus-caller-icon"
                src={CallerIcon}
                alt="Caller Icon"
              />
              <ul className="Contactus-list">
                <li>1234-1234-1234</li>
                <li>1234-1234-1234</li>
              </ul>
            </div>
            <div className="Contactus-address-wrapper">
              <h6 className="Contactus-address-headers">COMPANY EMAILS</h6>
              <img
                className="Contactus-icons"
                id="Contactus-message-icon"
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
