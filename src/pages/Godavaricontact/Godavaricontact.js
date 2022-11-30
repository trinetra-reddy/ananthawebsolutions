import React from "react";
import { Link } from "react-router-dom";
import { Godavariheader,Godavaricontactus, Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Godavaricontact.scss';


const Godavaricontact = () => {
    return (
        <div> 
            <Godavariheader />
            <Godavaricontactus/>
            <Propertiesfooter />
        </div>
    );
};

export default Godavaricontact;