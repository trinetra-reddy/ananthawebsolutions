import React from "react";
import "./Godavaricontactus.scss";
import Locations from "../Locations/Locations";
import LocationIcon from "./LocationIcon.svg";
const Godavaricontactus = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.1688261186528!2d77.53443313587825!3d14.6469047904435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb135a1a082c657%3A0x1924ed05e2103a21!2sAlamur%2C%20Kakkalapalle%20Rural%2C%20Andhra%20Pradesh%20515002%2C%20India!5e0!3m2!1sen!2sus!4v1668018257685!5m2!1sen!2sus";
  return (
    <>
      <div className="g-contactus-main">
        <div className="g-contactus-header-wrapper">
          <h1 className="g-contactus-header">Contact Us</h1>
        </div>
        <div className="g-contactus-locations-wrapper">
          <Locations
            img={LocationIcon}
            address="Prasanthi nagar, near amaravati car decors, beside Rural development and Educational trust school, Anantapuram town, Anantapuram - 515 001."
            locationmap={map}
          />
          <Locations
            img={LocationIcon}
            address="# Opp: sri sai Jr.college, Beside HP petrol bunk, alamuru Road, Anantapur-515001"
            locationmap={map}
          />
        </div>
        <div className="g-contactus-body-wrapper">
        <div className="g-contactus-body-header-wrapper">
                <h3 className="g-contactus-body-header">Get in touch</h3>
            </div>
        <div className="g-conatactus-form-wrapper">
        </div>
        </div>
      </div>
    </>
  );
};

export default Godavaricontactus;
