import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Floorplan,Godavariheader,Propertiesfooter,RoadMap, Yourdreamhouse } from "../../components";
=======
import {Godavariheader, Floorplan,Propertiesfooter } from "../../components";
import {  Yourdreamhouse,Specifications } from "../../components";
>>>>>>> 303e487f29330e3c13a2465ac222034ed753a654
import { CONSTANTS } from "../../utils/constants";
import './Properties.scss';



const Properties = () => {
    
    return (
        <div> 
            <Godavariheader />
            <Floorplan />
            <RoadMap />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;