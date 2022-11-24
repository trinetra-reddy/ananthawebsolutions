import React from "react";
import { Link } from "react-router-dom";
import { Footer, Godavariheader, Properties,HappyClients,Propertiesfooter, Improvingpeople, Godavariabouotus, } from "../../components";
import Godavariaboutus from "../../components/Godavariaboutus/Godavariaboutus";
import { CONSTANTS } from "../../utils/constants";
import './Godavari_Builders.scss';


const Godavari_Builders = () => {
    return (
        <div> 
            <Godavariheader />
            <Improvingpeople />
            <Godavariaboutus />
            <Properties />
            <HappyClients />
            <Propertiesfooter />
            <Footer />
        </div>
    );
};

export default Godavari_Builders;