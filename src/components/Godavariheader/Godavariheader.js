import React, { useEffect } from "react";
import './Godavariheader.scss';
import godavarimenu from '../../images/menu-icon.png';
import godavariclose from '../../images/close-icon.png';
import Headercontactus from "./Headercontactus.svg";

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
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <div className="drop-down">
            <a href="#" className="drop-down-item">Properties</a>
            <ul class="dropdown">
                  <li><a href="#">Properties</a></li>
                  <li><a href="#">Properties2</a></li>
              </ul>
          </div>
          <button className="header-contactus-button">Contactus<img src={Headercontactus} alt="headercontactus" /></button>
        </div>
      </nav>
    </header>

  );
};

export default Godavariheader;