import React from "react";
import "./Propertiesfooter.scss";
import { Link } from "react-router-dom";
import VectorImage from "./PropertiesfooterVector.svg";
const Propertiesfooter = () => {
  return (
    <>
      <div className="Propertiesfooter-container">
        <div className="Propertiesfooter-body">
          <div className="Propertiesfooter-headercontent">
            <h2 className="Propertiesfooter-body-header"
            id="Propertiesfooter-header-padding">
              HPR Godavari bulders and developers
            </h2>
            <h1 className="Propertiesfooter-body-header">
              Improving people’s futures through building infrastructure
            </h1>
          </div>
          <div className="Propertiesfooter-contact">
            <h3 className="Propertiesfooter-contact-header"
            id="Propertiesfooter-header-padding">Contact Us</h3>
            <p className="Propertiesfooter-contact-details">
              Pratap reddy : +91 87122 44534
            </p>
            <p className="Propertiesfooter-contact-details">
              Rajshekar : +91 93477 05148
            </p>
            <p className="Propertiesfooter-contact-details">
              Prasanthi nagar, near amaravati car decors, beside Rural
              development and Educational trust school, Anantapuram town,
              Anantapuram - 515 001.
            </p>
          </div>
        </div>
        <div className="Propertiesfooter-borderline"></div>
        <div className="Propertiesfooter-footer">
          <div className="Propertiesfooter-redirect-wrapper1">
            <Link className="Propertiesfooter-redirect" to="/about-us">
              About us
            </Link>
          </div>
          <div className="Propertiesfooter-redirect-wrapper2">
            <Link className="Propertiesfooter-redirect" to="/godavari-builders">
              Properties
            </Link>
          </div>
          <div>
            <button className="Propertiesfooter-button-wrapper">
              <Link
                className="Propertiesfooter-redirect"
                id="Propertiesfooter-redirect3"
                to="/contact-us"
              >
                Contactus
              </Link>
              <img className="Propertiesfooter-vectorimage" src={VectorImage} alt="VectorImage" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Propertiesfooter;
