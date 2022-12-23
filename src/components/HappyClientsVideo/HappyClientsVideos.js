import React from "react";
import "./HappyClientsVideos.scss";

const HappyClientsVideos=(props)=>{
    return(
        <>
        <div className="happyclientsvideo-main" >
            <iframe className="happyclients-video" src={props.videoUrl} autoPlay controls ></iframe>
        </div>
       
        </>
    );
};

export default HappyClientsVideos;