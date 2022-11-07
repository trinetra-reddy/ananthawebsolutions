import React from 'react';
import './Companymission.scss';
import image from './image.svg';
import vector1 from './vector1.svg';
import vector2 from './vector2.svg';

const Companymission = () => {
    return (
    <>
        <img classname="companymission-img" src={image} alt="about-us image" />
        <div className="companymission-text">About Us</div>
        <img className="companymission-vector1" src={vector1} alt="vector1"/>
        <img className="companymission-vector2" src={vector2} alt="vector2"/>
       
        <div classname="companymission-wrapper">Company mission</div>
    </>
    );
}
export default Companymission;