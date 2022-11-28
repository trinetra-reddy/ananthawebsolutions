import React from "react";
import { Link } from "react-router-dom";
import {Godavariheader, Floorplan,RoadMap,Propertiesfooter } from "../../components";
import {  Yourdreamhouse,Specifications } from "../../components";
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