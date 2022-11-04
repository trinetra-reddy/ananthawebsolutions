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
        <div className="tech-cards">
        <div className="tech-card">
            <img className="tech-icons" src={webImg} alt="webIcon" />
            <h4>Web Development</h4>
            <div className="tech-card-content">
                User Experience Design
                Visual & Graphic Design 
                Product Design
            </div>
        </div>
        <div class="tech-card">
            <img class="tech-icons" src={mobileImg} alt="mobileIcon" />
            <h4>Mobile Development</h4>
            <div class="tech-card-content">
                User Experience Design Visual & Graphic Design Product Design
            </div>
        </div>
        <div class="tech-card"> 
            <img class="tech-icons" src={uiuxImg} alt="uiuxIcon" />
            <h4>UIUX Design</h4>
            <div class="tech-card-content">
                User Experience Design Visual & Graphic Design Product Design
            </div>
        </div>
        </div>
    </div> 
        
    </>
    );
};

export default Tech;
