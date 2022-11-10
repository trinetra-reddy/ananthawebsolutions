import React,{useEffect} from "react";
import './Header.scss';
import logo from '../../images/anantha_logo.jpg';
import menu from '../../images/menu-icon.png';
import close from '../../images/close-icon.png';
import phone from '../../images/phone-icon.png';
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
      setTimeout(() => {
      }, 500)
      
    }, []);
  
const onToggleclick=()=>{const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
if(hamburger && navLink) {

      navLink.classList.toggle('hide');
      if(hamburger.classList.contains('expanded')) {
          hamburger.classList.remove('expanded');
      } else {
          hamburger.classList.add('expanded');
      }
     
  
}
}
    return (
        <header>
        <nav className="nav">
          <a href="header.html"><img src={logo} className="logo" alt="logo"/></a>
    
          <div className="hamburger" onClick={onToggleclick}>
            <div className="menu">
                <img src={menu} className="menu" alt="hamburger"/>
            </div>
            <div className="close">
                <img src={close} className="close" alt="close"/>
            </div>
          </div>
  
          <div className="nav__link hide">
            <Link to="/">Home</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact-us">Contact us<img src={phone} className="phone_icon" alt="phone_icon"/></Link>
          </div>
        </nav>
      </header>
    
    );
};

export default Header;