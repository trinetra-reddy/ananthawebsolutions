import React from 'react';
import './Floorplan.scss';
import Title from '../Title/Title';

const Floorplan = (props) => {
     return (
       <>
          <div className="floorplan-main">
            <Title name="Floor" name2=" Plan" />
          <div className="floorplan-text">
          Build by best engineers and created best floor plan
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