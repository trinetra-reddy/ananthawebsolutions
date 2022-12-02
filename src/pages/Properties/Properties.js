import React from "react";
import { Link } from "react-router-dom";
import {Godavariheader, Floorplan,Propertiesfooter,Yourdreamhouse,Specifications,Road,Map } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import yourdreamhousebuildingimage from "./building-2.jpeg";
import leftarrowyourdreamhouse from "./leftarrowyourdreamhouse.png";
import rightarrowyourdreamhouse from "./rightarrowyourdreamhouse.png";
import yourdreamhousecontactus from  "./yourdreamhousecontactus.svg";
import roadImg from "../../components/Road/roadImg.jpg";
import './Properties.scss';
import img1 from "./img1.svg";
import img2 from "./img2.svg";


const Properties = () => {
    const yourdreamhousedescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';

    return (
        <div> 
            <Godavariheader />
            <Yourdreamhouse heading="Your Dream House as Apartment and Villas" description={yourdreamhousedescription} btn="contactus" img={yourdreamhousecontactus} leftarrowimg={leftarrowyourdreamhouse} rightarrowimg={rightarrowyourdreamhouse} imgPath={yourdreamhousebuildingimage}/>
            <Specifications/>
            <Floorplan />
            <div className="road-map">
            <Road roadImage={roadImg} width="583px" height="555px" roadtext="800Meters to D-Mart" roadtext2="200 Meters to Tapovanam Circle" heading="Location Advantages"/>
            <Map />
            </div>
            
            <Propertiesfooter />
        </div>
    );
};

export default Properties;