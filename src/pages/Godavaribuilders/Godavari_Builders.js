import React from "react";
import { Link } from "react-router-dom";
import {Properties,HappyClients,Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Godavari_Builders.scss';


const Godavari_Builders = () => {
    return (
        <div> 
            <Properties />
            <HappyClients />
            <Propertiesfooter />
        </div>
    );
};

export default Godavari_Builders;