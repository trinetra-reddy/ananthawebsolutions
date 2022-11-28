import React from "react";
import { Link } from "react-router-dom";
import {Properties,Propertiesfooter,Godavariheader,Godavariaboutus,Improvingpeople } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import improvingpeoplebuildingimage from "../../images/building-1.jpg";
import './Godavari_Builders.scss';


const Godavari_Builders = () => {
    const improvingpeopledescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    return (
        <div> 
            <Godavariheader />
            <Improvingpeople heading="Improving people’s futures through bulding" description={improvingpeopledescription} imgPath={improvingpeoplebuildingimage}/>
            <Godavariaboutus />
            <Properties />
            
            <Propertiesfooter />
        </div>
    );
};

export default Godavari_Builders;