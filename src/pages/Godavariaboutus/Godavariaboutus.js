import React from "react";
<<<<<<< HEAD
import { Godavariheader, Godavariaboutus2, ProjectHeadings, Ourculture,CoreValuesComponent, HappyClientsVideos, ProjectButtons, Propertiesfooter, HappyClientsWrapper } from "../../components";
=======
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../utils/constants";
import { Godavariheader,Leadershipcomp, Godavariaboutus2, ProjectHeadings, Ourculture, HappyClientsVideos, HappyClientsDetails, ProjectButtons, Propertiesfooter, HappyClientsWrapper,Leadership  } from "../../components";
>>>>>>> ee9339206e84a9344f6e6441f4e58bd36505d68c

import './Godavariaboutus.scss';
import godavariaboutus2buildingimage from "./building-3.jpg";
import image from './image.svg';
import Ourvision from './Ourvision.svg';
import Whyus from './Whyus.svg';
import happyimg1 from "../../images/HappyClients/underline.png";
import happyimg5 from "../../images/HappyClients/happyImage.png";
import happyimg from "../../images/HappyClients/happyImg.png";
<<<<<<< HEAD
=======
import Ourvision from './Ourvision.svg';
import Whyus from './Whyus.svg';
import baba from '../../images/Baba_1.jpg';
>>>>>>> ee9339206e84a9344f6e6441f4e58bd36505d68c

const Godavariaboutus = () => {
    const ourCultureDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    const ourVisionDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    const godavariaboutus2description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    
    
    return (
        <div>
            <Godavariheader />
            <Godavariaboutus2 heading="About Us" heading1="We were originally established as a constractor to major indias housebuilders" description={godavariaboutus2description} imgPath={godavariaboutus2buildingimage}/>
            <Leadershipcomp name="Pratap Reddy" img={baba}/>
            <Leadershipcomp  name="Rajshekar" img ={baba} imgPosition="right" />
            <Ourculture name="Our W" name2="ork Culture" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={image} background="#FAFAFA"/>
            <Godavariaboutus2 heading="About Us" heading1="We were originally established as a constractor to major indias housebuilders" description={godavariaboutus2description} imgPath={godavariaboutus2buildingimage} />
            <Ourculture name="Our W" name2="ork Culture" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={image} background="#FAFAFA" />
            <Ourculture name="Why" name2=" Us" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={Whyus} imgPosition="right" bgColor="#026b33" textColor="white" border="4px solid white" />
            <Ourculture name="Our V" name2="ission" description={ourVisionDes} linkeddescription={ourCultureDes} imgPath={Ourvision} background="#FAFAFA"/> 
            <ProjectHeadings name="Happy clients" image1={happyimg1} />
            <div className="happyclient-details">                   
                <HappyClientsWrapper/>
            </div>
            <ProjectButtons image4={happyimg} image5={happyimg5} />
            <div class="happyvideos">
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo"  />
            </div>
            
            <CoreValuesComponent />
            
            <Propertiesfooter />

        </div>

    );
};

export default Godavariaboutus;