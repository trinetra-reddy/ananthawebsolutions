import React from 'react';
import './Floorplan.scss';
import Title from '../Title/Title';
import vector from "./Vector.svg";
import vector1 from "./vector1.svg";
const Floorplan = (props) => {
     return (
       <>
          <div className="floorplan-main">
            <Title name="Floor" name2=" Plan" />
            <div className="floorplan-wrapper">
          <div className="floorplan-text">
          Build by best engineers and created best floor plan
          </div>
          <div className={`{props.background}`}> 
            <button className="prop-button1 col-2"><img className="prop-button-img" src={vector} alt="vector" /></button> 
                 <button className="prop-button2 col-3">next<img className="prop-button-img1" src={vector1} alt="vector" /> </button>
            </div> 
            </div>
          <div className={`floorplan-img ${props.background}`}>
            <img className="floorplan-img1" src={props.img1}alt="typical-floorplan" />
            <img className="floorplan-img2" src={props.img2} alt="stilt-floorplan" />
            
          </div>
          </div>
       </>
     );
}
export default Floorplan;