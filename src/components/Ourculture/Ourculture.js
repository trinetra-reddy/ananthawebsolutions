import React from "react";
import "./Ourculture.scss";
const Ourculture = (props) => {
  return (
    <>
      <div className="our-culture-main">
        <div className="culture-main">
          <span className="culture-head1">{props.name}</span>
          <span className="culture-head2">{props.name2}</span>
        </div>
        <div className="culture-container">
          <img  className="culture-img-wrapper" src={props.imgPath} />
          <div className="culture-description">
            <p>{props.description}</p>
            <p>{props.linkeddescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourculture;
