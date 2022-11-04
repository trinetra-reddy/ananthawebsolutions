import React from "react";
import './Ourteam.scss';
import avatar from '../../images/avatar-1.png';
import avatar2 from '../../images/avatar2.png';
import baba from '../../images/Baba_1.jpg';
import vinay from '../../images/Vinay.jpg';

const Ourteam = () => {
  return (
    <div className="ourTeam-card-container">
      <h1>Our Creative Team</h1>
      <h2>Our Awesome Team</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptates labore voluptate
        exercitationem quos fugiat deleniti minus, aut voluptatem praesentium, suscipit animi. Obcaecati
        asperiores tempore saepe recusandae labore praesentium!</p>
      <div className="ourTeam-column-container">
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <img src={baba} alt="photo-1" />
            <h3>Baba Fakruddin G</h3>
            <h4>Co-founder/operational Manager</h4>
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <img src={avatar} alt="photo-1" />
            <h3>Siri K</h3>
            <h4>Web Developer</h4>
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <img src={avatar} alt="photo-1" />
            <h3>Giridhar</h3>
            <h4>Web & Posters Developer</h4>
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <img src={avatar} alt="photo-1" />
            <h3>Amrutha A</h3>
            <h4>Web Developer</h4>
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <img src={avatar} alt="photo-1" />
            <h3>Haritha R</h3>
            <h4>Web & Java Developer</h4>
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <img src={avatar2} alt="photo-1" />
            <h3>Subba Reddy</h3>
            <h4>Marketing Specialist</h4>
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <img src={avatar} alt="photo-1" />
            <h3>Manisha G</h3>
            <h4>Quality Analyst</h4>
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <img src={vinay} alt="photo-1" />
            <h3>Vinay</h3>
            <h4>Sales Manager</h4>
            <a href="#"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourteam;   