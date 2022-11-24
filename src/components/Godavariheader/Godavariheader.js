import React, { useEffect } from "react";
import './Godavariheader.scss';
import menu from '../../images/menu-icon.png';
import close from '../../images/close-icon.png';
import VectorImage from "../../components/Propertiesfooter/Vector.svg";

const Godavariheader = () => {
  useEffect(() => {
    setTimeout(() => {
    }, 500)

  }, []);

  const onToggleclick = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLink = document.querySelector('.nav__link');
    if (hamburger && navLink) {

      navLink.classList.toggle('hide');
      if (hamburger.classList.contains('expanded')) {
        hamburger.classList.remove('expanded');
      } else {
        hamburger.classList.add('expanded');
      }


    }
  }
  return (
    <header>
      <nav className="nav">

        <a href="header.html"><img  className="godavari_logo" alt="logo"/></a>

        <div className="hamburger" onClick={onToggleclick}>
          <div className="menu">
            <img src={menu} className="menu" alt="hamburger" />
          </div>
          <div className="close">
            <img src={close} className="close" alt="close" />
          </div>
        </div>

        <div className="nav__link hide">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Properties</a>
          <button className="header-contactus-button">Contactus<img src={VectorImage} alt="VectorImage" /></button>
        </div>
      </nav>
    </header>

  );
};

export default Godavariheader;