import React from "react";
import Improvingcontactus from "./Improvingcontactus.svg";
import leftarrowimproving from "./leftarrowimproving.png";
import rightarrowimproving from "./rightarrowimproving.png";
import "./Improvingpeople.scss";
import Contactusbutton from "../Contactusbutton/Contactusbutton";

const Improvingpeople = (props) => {
  return (
    <>
      <div className="improving-people">
        <div className="improving-people-left">
          <div className="improving-people-left-heading">
            <h1>{props.heading}</h1>
          </div>
          <div className="improving-people-left-content">
            <p>{props.description}</p>
          </div>
          <Contactusbutton />
          <div>
            <button className="improving-button-left">
              <img src={props.leftarrowimg} />
            </button>
            <button className="improving-button-right">
              <img src={props.rightarrowimg} />
            </button>
          </div>
        </div>
        <div className="improving-people-right">
          <img className="improving-people-right-image" src={props.imgPath} />
        </div>
      </div>
    </>
  );
};
export default Improvingpeople;
