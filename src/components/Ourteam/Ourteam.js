import React from "react";
import './Ourteam.scss';
import avatar from '../../images/avatar-1.png';
import avatar2 from '../../images/avatar2.png';
import baba from '../../images/Baba_1.jpg';
import vinay from '../../images/Vinay.jpg';
import facebook from '../../images/facebook__icon.png';
import linkedin from '../../images/linkedin__icon.png';
import twitter from '../../images/twitter__icon.png';

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
            <ul className="social-icons">
              <li>
                <a href="#"><img src={facebook} className="facebook" alt="facebook-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={linkedin} className="linkedin" alt="linkedin-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={twitter} className="twitter" alt="twitter-icon" /></a>
              </li>
            </ul>
            <div className="ourTeam-photo">
              <img src={baba} alt="photo-1" />
            </div>
            <h3>Baba Fakruddin G</h3>
            <h4>Co-founder/operational Manager</h4>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <ul className="social-icons">
              <li>
                <a href="#"><img src={facebook} className="facebook" alt="facebook-icon" /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/siri-k-898b96237/"><img src={linkedin} className="linkedin" alt="linkedin-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={twitter} className="twitter" alt="twitter-icon" /></a>
              </li>
            </ul>
            <img src={avatar2} alt="photo-1" />
            <h3>Siri K</h3>
            <h4>Web Developer</h4>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            {/* Social icons */}
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/girigiridharnaidu.ginuguntla"><img src={facebook} className="facebook" alt="facebook-icon" /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/giridhar-naidu-gonuguntla-637029169/"><img src={linkedin} className="linkedin" alt="linkedin-icon" /></a>
              </li>
              <li>
                <a href="https://twitter.com/GIRIDHARGONUGU1"><img src={twitter} className="twitter" alt="twitter-icon" /></a>
              </li>
            </ul>
            <img src={avatar} alt="photo-1" />
            <h3>Giridhar</h3>
            <hr class="center-ball"></hr>
            <h4>Web & Posters Developer</h4>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            {/* Social icons */}
            <ul className="social-icons">
              <li>
                <a href="#"><img src={facebook} className="facebook" alt="facebook-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={linkedin} className="linkedin" alt="linkedin-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={twitter} className="twitter" alt="twitter-icon" /></a>
              </li>
            </ul>
            <img src={avatar2} alt="photo-1" />
            <h3>Amrutha A</h3>
            <h4>Web Developer</h4>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            {/* Social icons */}
            <ul className="social-icons">
              <li>
                <a href="#"><img src={facebook} className="facebook" alt="facebook-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={linkedin} className="linkedin" alt="linkedin-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={twitter} className="twitter" alt="twitter-icon" /></a>
              </li>
            </ul>
            <img src={avatar2} alt="photo-1" />
            <h3>Haritha R</h3>
            <h4>Web & Java Developer</h4>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            {/* Social icons */}
            <ul className="social-icons">
              <li>
                <a href="#"><img src={facebook} className="facebook" alt="facebook-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={linkedin} className="linkedin" alt="linkedin-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={twitter} className="twitter" alt="twitter-icon" /></a>
              </li>
            </ul>
            <img src={avatar} alt="photo-1" />
            <h3>Subba Reddy</h3>
            <h4>Marketing Specialist</h4>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            {/* Social icons */}
            <ul className="social-icons">
              <li>
                <a href="#"><img src={facebook} className="facebook" alt="facebook-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={linkedin} className="linkedin" alt="linkedin-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={twitter} className="twitter" alt="twitter-icon" /></a>
              </li>
            </ul>
            <img src={avatar2} alt="photo-1" />
            <h3>Manisha G</h3>
            <h4>Quality Analyst</h4>
          </div>
        </div>
        <div className="ourTeam-column">
          <div className="ourTeam-card">
            <ul className="social-icons">
              <li>
                <a href="#"><img src={facebook} className="facebook" alt="facebook-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={linkedin} className="linkedin" alt="linkedin-icon" /></a>
              </li>
              <li>
                <a href="#"><img src={twitter} className="twitter" alt="twitter-icon" /></a>
              </li>
            </ul>
            <img src={vinay} alt="photo-1" />
            <h3>Vinay</h3>
            <h4>Sales Manager</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourteam;