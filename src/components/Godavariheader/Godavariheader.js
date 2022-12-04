import React, { useEffect } from "react";
import './Godavariheader.scss';
import godavarimenu from '../../images/menu-open.svg';
import godavariclose from '../../images/menu-close.svg';
import Headercontactus from "./Headercontactus.svg";
import { Link } from "react-router-dom";

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
          <Link to="/godavari-builders">Home</Link>
          <Link to="/g-about-us">About Us</Link>
          <div className="drop-down">
            <Link href="#" className="drop-down-item">Properties</Link>
            <ul class="dropdown">
                  <li><Link to="/g-properties">Properties</Link></li>
                  <li><Link to="/g-properties2">Properties2</Link></li>
              </ul>
          </div>
          <button className="header-contactus-button">Contactus<img src={Headercontactus} alt="headercontactus" /></button>
        </div>
      </nav>
    </header>
  );
};

export default Godavariheader;