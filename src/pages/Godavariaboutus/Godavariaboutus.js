import React from "react";
import { Link } from "react-router-dom";
import { Godavariheader, Ourculture,HappyClients, Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Godavariaboutus.scss';
import image from './image.svg';
import Ourvision from './Ourvision.svg'

const Godavariaboutus = () => {
    const ourCultureDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    const ourVisionDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    
    return (
            <div>
            <Godavariheader /> 
            <Ourculture name="our W" name2="ork Culture" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={image}/>
            <Ourculture namw="why" name2=" Us" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={''} imgPosition={right} />
            <Ourculture name="Our V" name2="ission" description={ourVisionDes} linkeddescription={ourCultureDes} imgPath={Ourvision}/>
            <HappyClients />
            <Propertiesfooter />
        </div>
           
    );
};

export default Godavariaboutus;