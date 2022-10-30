import React from "react";
import "./GetTouch.scss";

const GetTouch = () => {
  return (
    <>
      <div class="Touch-container">
        <div class="Touch-text">
          <h4 class="Touch-header-1">
            CONTACT US NOW IF YOU HAVE ANY QUESTION
          </h4>
          <h2 class="Touch-header-2">Get in Touch with us so Easy.</h2>
          <p class="Touch-paragraph">
            Lorem ipsum dolor sit amet, adipisicing elit. Ratione provident
            omnis iusto, veniam libero accusamus esse ab, enim temporibus.
          </p>
        </div>
        <div class="Touch-input-wrapper">
          <div class="Touch-Mail-wrapper">
            <input
              class="Touch-input"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div class="Touch-button-wrapper">
            <button class="Touch-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetTouch;
