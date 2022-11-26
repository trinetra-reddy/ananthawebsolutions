import React from "react";
import { Link } from "react-router-dom";
import { Godavariheader, HappyClients,WhyUs, Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Godavariaboutus.scss';


const Godavariaboutus = () => {
    return (
        <div> 
            <Godavariheader />
            <WhyUs />
            <HappyClients parentClass='about-us' />
            <Propertiesfooter />
        </div>
    );
};

export default Godavariaboutus;