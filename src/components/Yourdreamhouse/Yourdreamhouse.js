import React from 'react';
import Yourdreamhouseimage from './building-2.jpeg';
import yourdreamhousecontactus from "./yourdreamhousecontactus.svg";
import leftarrowyourdreamhouse from "./leftarrowyourdreamhouse.png";
import rightarrowyourdreamhouse from "./rightarrowyourdreamhouse.png";
import './Yourdreamhouse.scss';

const Yourdreamhouse = () => {
    return (
        <>
            <div className="yourdream-house">
                <div className="yourdream-house-left">
                    <div className="yourdream-house-left-heading">
                        <h1>Your Dream House as Apartment and Villas</h1>
                    </div>
                    <div className="yourdream-house-left-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatestempore
                            voluptatum assumenda rerum commodi, fuga accusantium optio.
                            autem repudiandae animi repellat omnis ad magni modi, eius rem earum?</p>
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
                    <img src={Yourdreamhouseimage} className="yourdream-house-right-image" alt="building-2 images" />
                </div>
            </div>

        </>
    );
}
export default Yourdreamhouse;





