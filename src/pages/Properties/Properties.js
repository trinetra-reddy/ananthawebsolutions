import React from "react";
import { Link } from "react-router-dom";
import { Floorplan,Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Properties.scss';


const Properties = () => {
    return (
        <div> 
            <Floorplan />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;