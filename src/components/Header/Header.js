import React,{useEffect} from "react";
import './Header.scss';
import logo from '../../images/anantha_logo.jpg';
import menu from '../../images/menu_icon.png';
import close from '../../images/close_icon.png';
import phone from '../../images/phone_icon.png';

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
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Contact us</a>
            <a href=""><img src={phone} className="phone_icon" alt="phone_icon"/></a>
          </div>
        </nav>
      </header>
    
    );
};

export default Header;