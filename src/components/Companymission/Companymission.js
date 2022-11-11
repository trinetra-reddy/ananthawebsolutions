import React from 'react';
import './Companymission.scss';
import image1 from "./image1.svg";
import companymission from './companymission.svg';
import vector1 from './vector1.svg';
import vector2 from './Vector 2.svg';
const Companymission = () => {
    return (
        <>
          <div className="companymission-main">
           <div className="companymission-top">
            <img className="companymission-img" src= {image1} alt="about-us"/>
            <div className="companymission-top-wrapper">
              <img className="cm-vector1" src={vector1} alt="vector1" />
              <div className="cm-text">About Us</div>
              <img className="cm-vector2" src={vector2} alt="vector2" />
            </div>
            
            </div>
          </div>
          <div >
            <div className="companymission-down">
            <div className="companymission-left">
                <img className="companymission-down-img" src={companymission} alt="company-mission" />
            </div>
            <div className="companymission-bottom">
                <h1 className="companymission-heading">Company mission</h1>
                <h3 className="companymission-head">“Success is based on pro-active and dedicated
                     teamwork in a professional and ethical environment..."</h3>
                     <p className="companymission-text">We strongly believe that success is based on pro-active and dedicated 
                        teamwork in a professional and ethical environment that leads to creative 
                        solutions and fully deserved rewards. This said, we always focus on safety, 
                        quality, a detailed approach, and above all, diligent handling of budgetary means
                         to maintain high standards at all levels of our activities, 
                        especially in dealings with employees, suppliers, subcontractors, and customers.</p>
            </div>
          </div>
          </div>
        </>
    );
}
export default Companymission;