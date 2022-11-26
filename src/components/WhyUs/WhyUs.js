import React from "react";
import whyUsImg from "./whyUsImg.png";
import whyUsVectorImg from "./whyUs-vectorImg.png";
import "./WhyUs.scss";

const WhyUs=()=>{
    return (
        <>
        <div className="whyUs">
            <div className="whyUs-main-heading">
                <div className="whyUS-heading">Why Us</div>
                <img className="whyUs-vector-img" src={whyUsVectorImg} alt="whyUS-Vector-Img"></img>
            </div>
            <div className="whyUs-main">
                <div className="whyUs-left">
                    <div className="whyUs-content">
                        <p className="whyUs-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
                        <p className="whyUs-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
                    </div>
                </div>
                <div className="whyUS-right">
                    <img className="whyUSImg2" src={whyUsImg} alt="WhyUs-Image"></img>
                </div>
            </div>
        </div>
        </>
    );
};

export default WhyUs;