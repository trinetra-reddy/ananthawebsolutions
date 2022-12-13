import React from "react";
import "./HappyClientsVideos.scss";

const HappyClientsVideos=(props)=>{
    return(
        <>
        <div className="happyclientsvideo-main" >
            <embed className="happyclients-video" src={props.videoUrl} autoPlay controls ></embed>
        </div>
       
        </>
    );
};

export default HappyClientsVideos;