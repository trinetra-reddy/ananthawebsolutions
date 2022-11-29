import React from 'react';
import "./ProjectButtons.scss";

const ProjectButtons =(props)=>{
    return (
        <>
            <div className="projectButtons-buttons">
                <button className="projectButtons-image1"><img className="ProjectButtons-img" src={props.image4} alt="vector" /></button>
                <img className="projectButtons-img2" src={props.image5} alt="vector" />
            </div>
        </>
    );
};

export default ProjectButtons;