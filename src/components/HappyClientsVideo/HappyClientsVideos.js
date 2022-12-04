import React from "react";
import "./HappyClientsVideos.scss";

const HappyClientsVideos=(props)=>{
    return(
        <>
        <div className="happyclientsvideo-main" >
            <embed className="happyclients-video" src={props.videoUrl} autoplay controls ></embed>
        </div>
       
        </>
    );
};

export default HappyClientsVideos;