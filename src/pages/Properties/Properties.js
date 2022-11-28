import React from "react";
import { Link } from "react-router-dom";
import {Godavariheader,Yourdreamhouse,Floorplan,Propertiesfooter,Specifications } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Properties.scss';



const Properties = () => {
    
    return (
        <div> 
            <Godavariheader />
            <Yourdreamhouse />
            <Floorplan />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;