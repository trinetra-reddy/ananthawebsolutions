import React from "react";
import "./HappyClientsVideos.scss";

const HappyClientsVideos=(props)=>{
    return(
        <>
        <div className="happyclientsvideo-main" style={{marginLeft:props.marginvideo}} >
          <div className={`happyclientsvideos ${props.videopath}`}>
            <embed className="happyclients-video" src={props.videoUrl} autoplay controls ></embed>
          </div>
        </div>
       
        </>
    );
};

export default HappyClientsVideos;