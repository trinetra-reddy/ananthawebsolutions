import React from "react";
import "./CompanyVision.scss";
import companyVisionImg from "./CompanyVision.svg";

const CompanyVision=() =>{
    return(
        <>
            <div className="vision-main">
               <img src={companyVisionImg} alt="visionImage"></img>
               <div className="vision-content">
                   <h3>COMPANY VISION</h3> 
                       <p className="vision-sub-content">We aim to be a leading contractor in Egypt by focusing on the timely implementation of our projects and meeting the expectations and requirements of our customers at the highest possible level.</p>
               </div>
            </div>
            
        </>
    );
};

export default CompanyVision;