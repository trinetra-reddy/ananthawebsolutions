import React from "react";
import "./Tech.scss";
import webImg from "../../icons/web.png";
import mobileImg from "../../icons/mobile.png";
import uiuxImg from "../../icons/uiux.png";


const Tech=()=>{
    return(
    <>
    <div class="main-card">
        <div class="tech-content">
            <div class="heading">Our Tech Experts Ready</div>
            <div class="heading"> To Give You What You Need</div>
            <p id="p1">Sed ultricies eleifned.Sed tincidunt lectus justo,eu vulputate leo fermentum vel.</p>
        </div>
        <div class="tech-card">
            <img class="tech-icons" src={webImg} alt="webIcon" />
            <h3>Web Development</h3>
            <p class="onhover">
                User Experience Design 
                Visual & Graphic Design 
                Product Design
            </p>
        </div>
        <div class="tech-card">
            <img class="tech-icons" src={mobileImg} alt="mobileIcon" />
            <h3>Mobile Development</h3>
            <p class="onhover">
                User Experience Design Visual & Graphic Design Product Design
            </p>
        </div>
        <div class="tech-card"> 
            <img class="tech-icons" src={uiuxImg} alt="uiuxIcon" />
            <h3>UIUX Design</h3>
            <p class="onhover">
                User Experience Design Visual & Graphic Design Product Design
            </p>
        </div>
    </div> 
        
    </>
    );
};

export default Tech;
