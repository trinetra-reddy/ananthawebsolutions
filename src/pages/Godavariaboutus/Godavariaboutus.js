import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Godavariheader, HappyClients,WhyUs, Propertiesfooter } from "../../components";
=======
import { Godavariheader, Ourculture,HappyClients, Propertiesfooter } from "../../components";
>>>>>>> 303e487f29330e3c13a2465ac222034ed753a654
import { CONSTANTS } from "../../utils/constants";
import './Godavariaboutus.scss';
import image from './image.svg';

const Godavariaboutus = () => {
    const ourCultureDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    const ourVisionDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    
    return (
<<<<<<< HEAD
        <div> 
            <Godavariheader />
            <WhyUs />
            <HappyClients parentClass='about-us' />
=======
            <div>
            <Godavariheader /> 
            <Ourculture name="our W" name2="ork Culture" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={image}/>
            <Ourculture name="Our V" name2="ission" description={ourVisionDes} linkeddescription={ourCultureDes} imgPath={image}/>
            <HappyClients />
>>>>>>> 303e487f29330e3c13a2465ac222034ed753a654
            <Propertiesfooter />
        </div>
           
    );
};

export default Godavariaboutus;