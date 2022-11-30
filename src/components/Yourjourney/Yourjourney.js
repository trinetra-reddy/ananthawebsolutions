import React from 'react';
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
                    {!props.hideBtn &&<div>
                        <button className="your-journey-contactus-button">{props.btn}<img src={props.img}/></button>
                    </div> }
                    <div>
                        <button className="your-journey-button-left"><img src={props.leftarrowimg} alt="arrowleft" /></button>
                        <button className="your-journey-button-right"><img src={props.rightarrowimg} alt="arrowright" /></button>
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
