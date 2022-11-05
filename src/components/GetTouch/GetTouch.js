import React from "react";
import "./GetTouch.scss";

const GetTouch = () => {
  return (
    <>
      <div className="Touch-container">
        <div className="Touch-text">
          <h4 className="Touch-header-1">
            CONTACT US NOW IF YOU HAVE ANY QUESTION
          </h4>
          <h2 className="Touch-header-2">Get in Touch with us so Easy.</h2>
          <p className="Touch-paragraph">
            Lorem ipsum dolor sit amet, adipisicing elit. Ratione provident
            omnis iusto, veniam libero accusamus esse ab, enim temporibus.
          </p>
        </div>
        <div className="Touch-form">
          <input
            className="Touch-input"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="Touch-button">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
};

export default GetTouch;
