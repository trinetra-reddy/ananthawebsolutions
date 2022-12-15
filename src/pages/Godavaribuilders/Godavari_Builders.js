import React from "react";
import { Link } from "react-router-dom";
import {Properties,Propertiesfooter,Godavariheader,Godavariaboutus,Improvingpeople,ProjectHeadings,HappyClientsVideos,HappyClientsDetails,ProjectButtons,HappyClientsVideosWrapper,HappyClientsWrapper,Ongoingprojects} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import improvingpeoplebuildingimage from "../../images/building-1.jpg";
import improvingcontactus from "./Improvingcontactusarrow.svg";
import leftarrowimproving from "../../images/vector-left-arrow.svg";
import rightarrowimproving from "../../images/vector-right-arrow.svg";
import './Godavari_Builders.scss';
import happyimg1 from "../../images/HappyClients/underline.png";
import happyimg5 from "../../images/HappyClients/happyImage.png";
import happyimg from "../../images/HappyClients/happyImg.png";


const Godavari_Builders = () => {
    const improvingpeopledescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    
    return (
        <div> 
            <Godavariheader />
            <Improvingpeople heading="Improving people’s futures through bulding" description={improvingpeopledescription} btn="Contact us" img={improvingcontactus} leftarrowimg={leftarrowimproving} rightarrowimg={rightarrowimproving} imgPath={improvingpeoplebuildingimage}/>
            <Ongoingprojects />
            <Godavariaboutus />
            <Properties name="Prope" name2="reties" />
            
            <ProjectHeadings name="Happy clients" image1={happyimg1} />
            <ProjectButtons image4={happyimg} image5={happyimg5}/>

            <div className="happyclient-details">
                 <HappyClientsWrapper/>
            </div>

            <ProjectButtons image4={happyimg} image5={happyimg5} />
            {/* <div className="happyvideos">
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo"  />
            </div> */}
            <div className="happyvideos">
                <HappyClientsVideosWrapper />
            </div>
            
            <Propertiesfooter />
        </div>
    );
};

export default Godavari_Builders;