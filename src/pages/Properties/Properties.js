import React from "react";
import { Link } from "react-router-dom";
import { Floorplan,Godavariheader,Propertiesfooter,RoadMap, Yourdreamhouse } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Properties.scss';


const Properties = () => {
    return (
        <div> 
            <Godavariheader />
            <Yourdreamhouse />
            <Floorplan />
            <RoadMap />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;