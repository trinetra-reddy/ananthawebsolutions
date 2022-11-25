import React from "react";
import { Link } from "react-router-dom";
import { Ourculture,Floorplan,Propertiesfooter } from "../../components";
import { Floorplan,Godavariheader,Propertiesfooter, Yourdreamhouse,Specifications } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Properties.scss';
import image from './image.svg';


const Properties = () => {
    const ourCultureDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    const ourVisionDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    
    return (
        <div> 
            <Ourculture name="our W" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={image}/>
            <Ourculture name="Our V" description={ourVisionDes} linkeddescription={ourCultureDes} imgPath={image}/>
            <Floorplan />
            <Propertiesfooter />
        </div>
    );
};

export default Properties;