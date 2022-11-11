import React from "react";
import builderImg from "./BuilderImg.jpg";
import "./CompanyCulture.scss";

const CompanyCulture=() =>{
    return (
        <>
            <div className="culture-about-main">
                <div className="culture-about-left">
                    <div className="culture-heading">COMPANY CULTURE</div>
                    <div className="culture-content">
                        <ul id="culture-ulist">
                            <li id="company-li">Foster a professional and ethical work environment.</li>
                            <li id="company-li">Set safety and quality as our top priorities.</li>
                            <li id="company-li">Encourage creativity and innovation in every aspect of our work.</li>
                            <li id="company-li">Recognize the value of a continuous improvement.</li>
                            <li id="company-li">Be open,lesten to our customers,and adapt to change.</li>
                        </ul>
                    </div>
                </div>
                <div className="culture-about-right">
                    <img className="culture-img" src={builderImg} alt="Builder-About-Image"></img>
                </div>
            </div>
        </>
    );
};

export default CompanyCulture;