import React from "react";
import { Link } from "react-router-dom";
import { Godavariheader,Godavariaboutus2, Ourculture,HappyClients, Propertiesfooter, CoreValuesComponent } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Godavariaboutus.scss';
import godavariaboutus2buildingimage from "./building-3.jpg";
import image from './image.svg';
<<<<<<< HEAD

=======
import happyimg1 from "../../images/HappyClients/underline.png";
import happyimg2 from "../../images/HappyClients/happyboy.png";
import happyimg3 from "../../images/HappyClients/happygirl.png";
import happyimg5 from "../../images/HappyClients/happyImage.png";
import happyimg from "../../images/HappyClients/happyImg.png";
>>>>>>> 6da8fdfda1975a5d6002c08f580f451817c6f124
import Ourvision from './Ourvision.svg';
import Whyus from './Whyus.svg';

const Godavariaboutus = () => {
    console.log('about page ,,,')
    const ourCultureDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    const ourVisionDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    const godavariaboutus2description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    
    
    return (
            <div>
            <Godavariheader />
            <Godavariaboutus2 heading="About Us" heading1="We were originally established as a constractor to major indias housebuilders" description={godavariaboutus2description} imgPath={godavariaboutus2buildingimage}/>
            <Ourculture name="Our W" name2="ork Culture" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={image} background="#FAFAFA"/>
            <Ourculture name="Why" name2=" Us" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={Whyus} imgPosition="right" bgColor="#026b33" textColor="white" border="4px solid white" />
            <Ourculture name="Our V" name2="ission" description={ourVisionDes} linkeddescription={ourCultureDes} imgPath={Ourvision} background="#FAFAFA"/> 
            
            <HappyClients />
            <CoreValuesComponent />
            
            <Propertiesfooter />
            
        </div>
           
    );
};

export default Godavariaboutus;