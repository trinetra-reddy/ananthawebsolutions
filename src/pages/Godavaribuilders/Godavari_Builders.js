import React from "react";
import { Link } from "react-router-dom";
import {Properties,Propertiesfooter,Godavariheader,Godavariaboutus,Improvingpeople,ProjectHeadings,HappyClientsVideos,HappyClientsDetails,ProjectButtons } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import improvingpeoplebuildingimage from "../../images/building-1.jpg";
import improvingcontactus from "./Improvingcontactusarrow.svg";
import leftarrowimproving from "./leftarrowimproving.png";
import rightarrowimproving from "./rightarrowimproving.png";
import './Godavari_Builders.scss';
import happyimg1 from "../../components/HappyClients/underline.png";
import happyimg2 from "../../components/HappyClients/happyboy.png";
import happyimg3 from "../../components/HappyClients/happygirl.png";
import happyimg5 from "../../components/HappyClients/happyImage.png";
import happyimg from "../../components/HappyClients/happyImg.png";


const Godavari_Builders = () => {
    const improvingpeopledescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    const happyClientDes='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation';
    return (
        <div> 
            <Godavariheader />
            <Improvingpeople heading="Improving people’s futures through bulding" description={improvingpeopledescription} btn="contactus" img={improvingcontactus} leftarrowimg={leftarrowimproving} rightarrowimg={rightarrowimproving} imgPath={improvingpeoplebuildingimage}/>
            <Godavariaboutus />
            <Properties name="Prope" name2="reties" />

            <ProjectHeadings name="Happy clients" image1={happyimg1} />
            <ProjectButtons image4={happyimg} image5={happyimg5}/>

            <div className="happyclient-details">
            <HappyClientsDetails happyContent={happyClientDes} image2={happyimg2} client1="Krishna Kanth" />
            <HappyClientsDetails happyContent={happyClientDes} image2={happyimg3}  client1="Ramika sayn"/>
            </div>

            <ProjectButtons image4={happyimg} image5={happyimg5} />
            <div class="happyvideos">
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo"  />
            </div>
            
            <Propertiesfooter />
        </div>
    );
};

export default Godavari_Builders;