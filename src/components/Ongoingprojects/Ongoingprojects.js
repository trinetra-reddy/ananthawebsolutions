import React from "react";
import "./Ongoingprojects.scss";
import Ongoingproject1 from "./Ongoingproject-img1.jpg";
import Ongoingproject2 from "./Ongoingproject-img2.jpg";
import Ongoingproject3 from "./Ongoingproject-img3.jpg";

const Ongoingprojects = () => {
  return (
    <>
      <div className="Ongoingproject-main">
        <div className="Ongoingproject-header-wrapper">
          <h1 className="Ongoingproject-header">ONGOING PROJECTS</h1>
        </div>
        <div className="Ongoingproject-projects-wrapper">
          <div>
            <img
              className="Ongoingproject-projects"
              src={Ongoingproject1}
              alt="Ongoingproject1"
            ></img>
          </div>
          <div>
            <img
              className="Ongoingproject-projects"
              src={Ongoingproject2}
              alt="Ongoingproject2"
            ></img>
          </div>
          <div>
            <img
              className="Ongoingproject-projects"
              src={Ongoingproject3}
              alt="Ongoingproject3"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ongoingprojects;
