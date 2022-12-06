import React, { useEffect } from "react";
import './Godavariheader.scss';
import godavarimenu from '../../images/menu-open.svg';
import godavariclose from '../../images/menu-close.svg';
import Headercontactus from "./Headercontactus.svg";
import { NavLink } from "react-router-dom";

const Godavariheader = () => {
  useEffect(() => {
    setTimeout(() => {
    }, 500)

  }, []);

  const onToggleclick = () => {
    const hamburgermenu = document.querySelector('.hamburgermenu');
    const navbarLink = document.querySelector('.navbar__link');
    if (hamburgermenu && navbarLink) {

      navbarLink.classList.toggle('hide');
      if (hamburgermenu.classList.contains('expanded')) {
        hamburgermenu.classList.remove('expanded');
      } else {
        hamburgermenu.classList.add('expanded');
      }


    }
  }
  return (
    <header>
      <nav className="nav-bar">

        <a href="#"className="godavari_logo" alt="logo">LOGO</a>

        <div className="hamburgermenu" onClick={onToggleclick}>
          <div className="menu">
            <img src={godavarimenu} className="godavarimenu" alt="hamburger" />
          </div>
          <div className="close">
            <img src={godavariclose} className="godavariclose" alt="close" />
          </div>
        </div>

        <div className="navbar__link hide">
          <NavLink to="/godavari-builders" activeclassname="active">Home</NavLink>
          <NavLink to="/g-about-us" activeclassname="active">About Us</NavLink>
          <div className="drop-down">
            <a  className="drop-down-item">Properties</a>
            <ul class="dropdown">
                  <li><NavLink to="/g-properties" activeclassname="active">Properties</NavLink></li>
                  <li><NavLink to="/g-properties2" activeclassname="active">Properties2</NavLink></li>
              </ul>
          </div>
          <button className="header-contactus-button">Contactus<img src={Headercontactus} alt="headercontactus" /></button>
        </div>
      </nav>
    </header>
  );
};

export default Godavariheader;