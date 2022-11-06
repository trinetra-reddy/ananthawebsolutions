import React from "react";
import builderImg from "./BuilderImg.jpg";
import "./CompanyCulture.scss";

const CompanyCulture=() =>{
    return (
        <>
            <div className="builder-about-main">
                <div className="builder-about-left">
                    <div className="builder-heading">COMPANY CULTURE</div>
                    <div className="builder-content">
                        <ul>
                            <li>Foster a professional and ethical work environment.</li>
                            <li>Set safety and quality as our top priorities.</li>
                            <li>Encourage creativity and innovation in every aspect of our work.</li>
                            <li>Recognize the value of a continuous improvement.</li>
                            <li>Be open,lesten to our customers,and adapt to change.</li>
                        </ul>
                    </div>
                </div>
                <div className="builder-about-right">
                    <img className="builder-img" src={builderImg} alt="Builder-About-Image"></img>
                </div>
            </div>
        </>
    );
};

export default CompanyCulture;