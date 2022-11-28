import React from 'react';
import Yourjourneycontactus from "./Yourjourneycontactus.svg";
import leftarrowyourjourney from "./leftarrowyourjourney.png";
import rightarrowyourjourney from "./rightarrowyourjourney.png";
import './Yourjourney.scss';

const Yourjourney = (props) => {
    return (
        <>
            <div className="your-journey">
                <div className="your-journey-left">
                    <div className="your-journey-left-heading">
                        <h1>{props.heading}</h1>
                    </div>
                    <div className="your-journey-left-content">
                        <p>{props.description}</p>
                    </div>
                    <div>
                        <button className="your-journey-contactus-button">Contactus<img src={Yourjourneycontactus} alt="VectorImage" /></button>
                    </div>
                    <div>
                        <button className="your-journey-button-left"><img src={leftarrowyourjourney} alt="arrowleft" /></button>
                        <button className="your-journey-button-right"><img src={rightarrowyourjourney} alt="arrowright" /></button>
                    </div>
                </div>
                <div className="your-journey-right">
                    <img className="your-journey-right-image" src={props.imgPath} />
                </div>
            </div>
        </>
    );
}
export default Yourjourney;
