import React from "react";
import { Link } from "react-router-dom";
import {Godavariheader, Floorplan,Propertiesfooter,Yourdreamhouse,Specifications,RoadMap } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import yourdreamhousebuildingimage from "./building-2.jpeg";
import './Properties.scss';



const Properties = () => {
    const yourdreamhousedescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';

    return (
        <div> 
            <Godavariheader />
            <Yourdreamhouse heading="Your Dream House as Apartment and Villas" description={yourdreamhousedescription} imgPath={yourdreamhousebuildingimage}/>
            <Specifications/>
            <Floorplan />
            <RoadMap />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;