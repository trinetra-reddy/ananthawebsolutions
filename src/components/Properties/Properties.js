import React from 'react';
import Propimages1 from './Propimages1.svg';
import Propimage2 from './Propimage2.svg';
import './Properties.scss';
const Properties = () => {
    return (
        <>
        <div className="properties-main">
            <div className="main">
            <span className="prop1">Prope</span>
            <span className="prop2">rties</span>
            </div>
            <div>Committed to building long-term relationships with our partners, suppliers and clients.</div>
            <div>We recognise that our success is the direct result of the hard work of
                 the people who work for us, with us and alongside us  Lorem ipsum dolor sit amet, 
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                 <span>Our Projects</span>
                 <span></span>
                 <button></button>
                 <button>next </button>
                 <img src={Propimages1} alt="image1"/>
                 <img src={Propimage2} alt="image2" />
        </div>
        </>
    );
}
export default Properties;