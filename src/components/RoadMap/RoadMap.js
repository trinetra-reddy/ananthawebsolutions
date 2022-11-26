import React from "react";
import roadImg from "./roadImg.jpg";
import "./RoadMap.scss";

const RoadMap=()=>{
    return (
        <>
            <div className="roadmap-main">
                <div className="roadmap-left">
                    <img className="roadmap-Img" src={roadImg} alt="RoadMapImg"></img>
                    <h3 id="roadmap-adv">Location Advantages</h3>
                    <div className="roadmap-meters">
                        <div className="roadmap-text">
                            800 Meters to D-mart
                        </div>
                        <div className="roadmap-text">
                            200 Meters to Tapovanam Circle
                        </div>
                    </div>
                </div>
                <div className="roadmap-right">
                <h3 id="location-heading">Location Map</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.1688261186528!2d77.53443313587825!3d14.6469047904435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb135a1a082c657%3A0x1924ed05e2103a21!2sAlamur%2C%20Kakkalapalle%20Rural%2C%20Andhra%20Pradesh%20515002%2C%20India!5e0!3m2!1sen!2sus!4v1668018257685!5m2!1sen!2sus"></iframe>
                </div>
            </div>
        </>
    );
};

export default RoadMap;