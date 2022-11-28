import React from "react";
import { Link } from "react-router-dom";
import { Godavariheader,Godavariaboutus2,Ourculture,HappyClients,WhyUs, Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Godavariaboutus.scss';
import godavariaboutus2buildingimage from "./building-3.jpg";
import image from './image.svg';
import Ourvision from './Ourvision.svg'

const Godavariaboutus = () => {
    const ourCultureDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    const ourVisionDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    const godavariaboutus2description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';

    return (
        <div> 
            <Godavariheader />
            <Godavariaboutus2 heading="About Us" heading1="We were originally established as a constractor to major indias housebuilders" description={godavariaboutus2description} imgPath={godavariaboutus2buildingimage}/>
            <WhyUs />
            <HappyClients parentClass='about-us' />
            <Ourculture name="our W" name2="ork Culture" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={image}/>
            <Ourculture namw="why" name2=" Us" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={''} imgPosition={right} />
            <Ourculture name="Our V" name2="ission" description={ourVisionDes} linkeddescription={ourCultureDes} imgPath={Ourvision}/>
            <HappyClients />
            <Propertiesfooter />
        </div>
           
    );
};

export default Godavariaboutus;