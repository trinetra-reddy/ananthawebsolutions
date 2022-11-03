import React from "react";
import "./Tech.scss";
import webImg from "../../icons/web.png";
import mobileImg from "../../icons/mobile.png";
import uiuxImg from "../../icons/uiux.png";


const Tech=()=>{
    return(
    <>
    <div className="main-card">
        <div className="tech-content">
            <div className="tech-heading">Our Tech Experts Ready
             To Give You What You Need</div>
             <div className="tech-sub-heading">
                Sed ultricies eleifned.Sed tincidunt lectus justo,eu vulputate leo fermentum vel.
                </div>
        </div>
        <div className="tech-card">
            <img className="tech-icons" src={webImg} alt="webIcon" />
            <h3>Web Development</h3>
            <div className="tech-card-content">
                User Experience Design 
                Visual & Graphic Design 
                Product Design
            </div>
        </div>
        <div className="tech-card">
            <img className="tech-icons" src={mobileImg} alt="mobileIcon" />
            <h3>Mobile Development</h3>
            <div className="tech-card-content">
                User Experience Design Visual & Graphic Design Product Design
            </div>
        </div>
        <div className="tech-card"> 
            <img className="tech-icons" src={uiuxImg} alt="uiuxIcon" />
            <h3>UIUX Design</h3>
            <div className="tech-card-content">
                User Experience Design Visual & Graphic Design Product Design
            </div>
        </div>
    </div> 
        
    </>
    );
};

export default Tech;
