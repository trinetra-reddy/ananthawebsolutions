import React from "react";
import { Link } from "react-router-dom";
import { Godavariheader, HappyClients, Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Godavariaboutus.scss';


const Godavariaboutus = () => {
    return (
        <div> 
            <Godavariheader />
            <HappyClients />
            <Propertiesfooter />
        </div>
    );
};

export default Godavariaboutus;