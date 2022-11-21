import React from 'react';
import Propimages1 from './Propimages1.svg';
import Propimage2 from './Propimage2.svg';
import vector from "./Vector.svg";
import vector1 from "./vector1.svg";
import vector2 from "./vector2.svg";
import './Properties.scss';
const Properties = () => {
    return (
        <>
        <div className="properties-main">
            <div className="row">
                <div className="properties">
                <div className="col-12 "> 
            <span className="prop1">Prope</span>
            <span className="prop2">rties</span>
            </div>
            </div>
            <div className="prop-text1 col-12 col-lg-6">Committed to building long-term relationships with our partners, suppliers and clients.</div>
            <div className="prop-text2 col-12 col-lg-6">We recognise that our success is the direct result of the hard work of
                 the people who work for us, with us and alongside us  Lorem ipsum dolor sit amet, 
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                 <div className="row">
                 <span className="prop-project col-6 col-lg-2">Our Projects</span>
                 <img className="prop-proj-img" src={vector2} alt="vector2"/>
                 <button className="prop-button1 col-2"><img className="prop-button-img" src={vector} alt="vector" /></button>
                 <button className="prop-button2 col-3">next<img className="prop-button-img1" src={vector1} alt="vector" /> </button>
                 </div>
                 <div className="row">
                    <div className="prop-images">
                 <img className="prop-img1 col-12 col-lg-6"src={Propimages1} alt="image1"/>
                 <img className="prop-img2 col-12 col-lg-6"src={Propimage2} alt="image2" />
                 </div>
                 </div>
                 </div>
        </div>
        </>
    );
}
export default Properties;