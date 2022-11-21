import React from "react";
import "./Propertiesfooter.scss";
import { Link } from "react-router-dom";
import VectorImage from "./Vector.svg";
const Propertiesfooter = () => {
  return (
    <>
      <div class="Propertiesfooter-main">
        <div class="Propertiesfooter-body">
          <div class="Propertiesfooter-headercontent">
            <h2 class="Propertiesfooter-body-header">
              HPR Godavari buldersand developers
            </h2>
            <h1 class="Propertiesfooter-body-header">
              Improving people’s futures through building infrastructure
            </h1>
          </div>
          <div class="Propertiesfooter-contact">
            <h3 class="Propertiesfooter-contact-header">Contact Us</h3>
            <p class="Propertiesfooter-contact-details">
              Pratap reddy : +91 87122 44534
            </p>
            <p class="Propertiesfooter-contact-details">
              Rajshekar : +91 93477 05148
            </p>
            <p class="Propertiesfooter-contact-details">
              Prasanthi nagar, near amaravati car decors, beside Rural
              development and Educational trust school, Anantapuram town,
              Anantapuram - 515 001.
            </p>
          </div>
        </div>
        <div class="Propertiesfooter-borderline"></div>
        <div class="Propertiesfooter-footer">
          <div class="Propertiesfooter-redirect-wrapper1">
            <Link class="Propertiesfooter-redirect" to="/about-us">
              About us
            </Link>
          </div>
          <div class="Propertiesfooter-redirect-wrapper2">
            <Link class="Propertiesfooter-redirect" to="/godavari-builders">
              Properties
            </Link>
          </div>
          <div>
            <button class="Propertiesfooter-button-wrapper">
              <Link
                class="Propertiesfooter-redirect"
                id="Propertiesfooter-redirect3"
                to="/contact-us"
              >
                Contactus
              </Link>
              <img src={VectorImage} alt="VectorImage" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Propertiesfooter;
