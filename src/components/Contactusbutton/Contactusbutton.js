import React from "react";
import VectorImage from "./ButtonVector.svg";
import "./Contactusbutton.scss";

import { Link } from "react-router-dom";
const Contactusbutton = () => {
  return (
    <>
      <div className="Contactusbutton-main">
        <button className="Contactusbutton-wrapper">
          <Link className="Contactusbutton-redirect" to="/g-contact-us">
            Contactus
          </Link>
          <img
            className="Contactusbutton-vectorimage"
            src={VectorImage}
            alt="VectorImage"
          />
        </button>
      </div>
    </>
  );
};
export default Contactusbutton;
