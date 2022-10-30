import React from "react";
import './Ourteam.scss';
import avatar from '../../images/avatar-1.png';
import avatar2 from '../../images/avatar2.png';

const Ourteam = () => {
  return (
<div className="ourTeamcard-container">
      <h1>Our Creative Team</h1>
      <h2>Our Awesome Team</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptates labore voluptate 
      exercitationem quos fugiat deleniti minus, aut voluptatem praesentium, suscipit animi. Obcaecati 
      asperiores tempore saepe recusandae labore praesentium!</p>
      <div className="ourTeam-row">
            <div className="ourTeam-column-container">
              <div className="ourTeam-column">
                <div className="ourTeam-card">
                  <img src={avatar} alt="photo-1"/>
                  <h3>Employe Name</h3>
                  <h4>Role/position</h4>
                </div>
            </div>
            <div className="ourTeam-column">
                <div className="ourTeam-card">
                  <img src={avatar2} alt="photo-1"/>
                  <h3>Employe Name</h3>
                  <h4>Role/position</h4>
                </div>
            </div>
                <div className="ourTeam-column">
                    <div className="ourTeam-card">
                      <img src={avatar} alt="photo-1"/>
                      <h3>Employe Name</h3>
                      <h4>Role/position</h4>
                    </div>
                </div>
                <div className="ourTeam-column">
                    <div className="ourTeam-card">
                        <img src={avatar2} alt="photo-1"/>
                        <h3>Employe Name</h3>
                        <h4>Role/position</h4>
                    </div>
                </div>
          </div> 
      </div>          
    </div>
  )
}

export default Ourteam;   