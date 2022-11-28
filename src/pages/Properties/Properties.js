import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import {Godavariheader,Yourdreamhouse,Floorplan,Propertiesfooter,Specifications } from "../../components";
=======
import {Godavariheader, Floorplan,Propertiesfooter,Yourdreamhouse,Specifications,RoadMap } from "../../components";
>>>>>>> 475c125d360ea2f6f2b64966a6985b53b52f9f01
import { CONSTANTS } from "../../utils/constants";
import './Properties.scss';



const Properties = () => {
    
    return (
        <div> 
            <Godavariheader />
<<<<<<< HEAD
            <Yourdreamhouse />
=======
            <Yourdreamhouse/>
            <Specifications/>
>>>>>>> 475c125d360ea2f6f2b64966a6985b53b52f9f01
            <Floorplan />
            <RoadMap />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;