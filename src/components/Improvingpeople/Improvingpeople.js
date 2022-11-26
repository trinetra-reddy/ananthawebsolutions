import React from 'react';
import improvingpeoplefutureimage from '../../images/building-1.jpg';
import  Improvingcontactus from "./Improvingcontactus.svg";
import  leftarrowimproving from "./leftarrowimproving.png";
import  rightarrowimproving from "./rightarrowimproving.png";
import './Improvingpeople.scss';

const Improvingpeople = () => {
    return (
        <>
        <div className="improving-people">
        <div className="improving-people-left">
            <div className="improving-people-left-heading">
                <h1>Improving people futures through bulding</h1>
            </div>
            <div className="improving-people-left-content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatestempore
                    voluptatum assumenda rerum commodi, fuga accusantium optio.
                    autem repudiandae animi repellat omnis ad magni modi, eius rem earum?</p>
            </div>
            <div>
                <button className="improving-contactus-button">Contactus<img src={Improvingcontactus} alt="VectorImage" /></button>
            </div>
            <div>
               <button className="improving-button-left"><img src={leftarrowimproving} alt="improvingcontactus" /></button>
               <button className="improving-button-right"><img src={rightarrowimproving} alt="improvingcontactus" /></button>
            </div>
        </div>
        <div className="improving-people-right">
            <img src={improvingpeoplefutureimage} className="improving-people-right-image" alt="building images" />
        </div>
    </div>    
        </>
    );
}
export default Improvingpeople;