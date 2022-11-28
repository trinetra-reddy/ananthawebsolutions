import React from 'react';
import Yourdreamhouseimage from './building-2.jpeg';
import yourdreamhousecontactus from "./yourdreamhousecontactus.svg";
import leftarrowyourdreamhouse from "./leftarrowyourdreamhouse.png";
import rightarrowyourdreamhouse from "./rightarrowyourdreamhouse.png";
import './Yourdreamhouse.scss';

const Yourdreamhouse = (props) => {
    return (
        <>
            <div className="yourdream-house">
                <div className="yourdream-house-left">
                    <div className="yourdream-house-left-heading">
                        <h1>{props.heading}</h1>
                    </div>
                    <div className="yourdream-house-left-content">
                        <p>{props.description}</p>
                    </div>
                    <div>
                    <button className="improving-contactus-button">Contactus<img src={yourdreamhousecontactus} alt="VectorImage" /></button>
                    </div>
                    <div>
                    <button className="yourdream-house-left-button"><img src={leftarrowyourdreamhouse} alt="left arrow" /></button>
                    <button className="yourdream-house-right-button"><img src={rightarrowyourdreamhouse} alt="right arrow" /></button>
                     </div>
                </div>
                <div className="yourdream-house-right">
                    <img  className="yourdream-house-right-image" src={props.imgPath} />
                </div>
            </div>

        </>
    );
}
export default Yourdreamhouse;





