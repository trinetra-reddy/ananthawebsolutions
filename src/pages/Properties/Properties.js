import React from "react";
import { Link } from "react-router-dom";
import {Godavariheader, Floorplan,Propertiesfooter,Yourdreamhouse,Specifications } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Properties.scss';



const Properties = () => {
    
    return (
        <div> 
            <Godavariheader />
            <Yourdreamhouse/>
            <Specifications/>
            <Floorplan />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;