import React from "react";
import { Link } from "react-router-dom";
import { Godavariheader, Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Properties2.scss';


const Properties2 = () => {
    return (
        <div>
            <Godavariheader /> 
            <Propertiesfooter />
        </div>
    );
};

export default Properties2;