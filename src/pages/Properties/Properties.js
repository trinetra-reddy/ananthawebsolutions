import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import {Godavariheader, Floorplan,Propertiesfooter,Yourdreamhouse,Specifications } from "../../components";
=======
<<<<<<< HEAD
import { Floorplan,Godavariheader,Propertiesfooter,RoadMap, Yourdreamhouse } from "../../components";
=======
import {Godavariheader, Floorplan,Propertiesfooter } from "../../components";
import {  Yourdreamhouse,Specifications } from "../../components";
>>>>>>> 303e487f29330e3c13a2465ac222034ed753a654
>>>>>>> a2948dbf680a264e95deefd165c0208dfa313567
import { CONSTANTS } from "../../utils/constants";
import './Properties.scss';



const Properties = () => {
    
    return (
        <div> 
            <Godavariheader />
            <Yourdreamhouse/>
            <Specifications/>
            <Floorplan />
            <RoadMap />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;