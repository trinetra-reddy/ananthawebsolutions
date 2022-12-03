import React from 'react';
import "./ProjectButtons.scss";
import vector1 from "../Properties/vector1.svg";

const ProjectButtons =(props)=>{
    return (
        <>
            <div className="projectButtons-buttons">
                <button className="projectButtons-image1"><img className="ProjectButtons-img" src={props.image4} alt="vector" /></button>
                <button className="projectButton2">next<img className="ProjectButton-img1" src={vector1} alt="vector" /></button>
            </div>
        </>
    );
};

export default ProjectButtons;