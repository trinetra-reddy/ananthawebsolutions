import React from 'react';
import './Floorplan.scss';
import img1 from "./img1.svg";
import img2 from "./img2.svg";
const Floorplan = () => {
     return (
       <>
          <div className="floorplan-main">
            <div className="floor-plan">
            <span className="floor1">Floor</span>
            <span className="floor2">  Plan</span>
            </div>
          <div className="floorplan-text">
          Build by best engineers and created best floor plan
          </div>
          <div className="floorplan-img">
            <img className="floorplan-img1" src={img1} alt="typical-floorplan" />
            <img className="floorplan-img2" src={img2} alt="stilt-floorplan" />
          </div>
          </div>
       </>
     );
}
export default Floorplan;