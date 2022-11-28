import React from "react";
import "./ProjectHeadings.scss";

const ProjectHeadings=(props)=>{
    return (
        <>
            <div className="projectheadings-main" style={{margin:props.happymargin}}>
                <div className="projectheadings-heading">{props.name}</div>
                    <img
                        className="projectheadings-vector"
                        src={props.image1}
                        alt="HappyClients-vector-img"
                    ></img>
            </div>
        </>
    );
};

export default ProjectHeadings;