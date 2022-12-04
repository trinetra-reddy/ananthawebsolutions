import React from 'react';
import { Link } from "react-router-dom";
import { Godavariheader,Yourjourney,Floorplan,Road,Map, Propertiesfooter } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import roadImg from "../../components/Road/roadImg.jpg";
import yourjourneybuildingimage from "./building-2.jpeg";
import leftarrowyourjourney from "../../images/vector-left-arrow.svg";
import rightarrowyourjourney from "../../images/vector-right-arrow.svg";
import Yourjourneycontactus from "./Yourjourneycontactus.svg";
import './Properties2.scss';
import img1 from './img1.svg';
import img2 from './img2.svg';

const Properties2 = (props) => {
    const yourjourneydescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    
    return (
        <>
        <Godavariheader />
        <Yourjourney heading="Your journey to get dream home is very near now" description={yourjourneydescription} btn="Contact us" img={Yourjourneycontactus} leftarrowimg={leftarrowyourjourney} rightarrowimg={rightarrowyourjourney} imgPath={yourjourneybuildingimage}/>
        <Floorplan img1={img1} img2={img2} classname="prop-2"/>
        <div className="road-map">
            <Road roadImage={roadImg} width="583px" height="555px" roadtext="800Meters to D-Mart" roadtext2="200 Meters to Tapovanam Circle" heading="Location Advantages"/>
            <Map />
        </div>
        <Propertiesfooter />
        </>
     
    )
}

export default Properties2;