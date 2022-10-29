import React,{useEffect} from "react";
import './Header.scss';
import logo from '../../images/anantha_logo.jpg';

const Header = () => {
    useEffect(() => {
        setTimeout(() => {
            const hamburger = document.querySelector('.hamburger');
            const navLink = document.querySelector('.nav__link');
            if(hamburger && navLink) {
                hamburger.addEventListener('click', () => {
                    navLink.classList.toggle('hide');
                    if(hamburger.classList.contains('expanded')) {
                        hamburger.classList.remove('expanded');
                    } else {
                        hamburger.classList.add('expanded');
                    }
                   
                });
            }
        }, 500)
        
      }, []);
    

    return (
        <header>
        <nav className="nav">
          <a href="header.html"><img src={logo} className="logo" alt="logo"/></a>
    
          <div className="hamburger">
            <div className="menu">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="close">
                X
            </div>
          </div>
  
          <div className="nav__link hide">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Contact us</a>
            <i className="fa fa-phone"></i>
          </div>
        </nav>
      </header>
    
    );
};

export default Header;