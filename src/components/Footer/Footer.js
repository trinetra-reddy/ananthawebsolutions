import React from "react";
import "./Footer.scss";
import footer_logo from '../../images/anantha_logo.jpg';

const Footer = () => {
  return (
    <div className="footer-main-container">
    <div className="footer-container-1" style="flex-grow: 3">
      <img src={footer_logo} className="footer_logo" alt="logo"/>
      <h1><br>Lorem ipsum dolor sit amet consectetur,</br>
      <br>adipisicing elit.Suscipit autem praesentium </br>
      <br>dolorem temporibus odiomodi reiciendis,lauda</br>
      <br>ntium, nihiltempore amet qui numquam mollitia</br>
      </h1>
      <h2>(c) ananthawebsolutions,2022. All Rights Reserved.</h2>
    </div>
    <div className="footer-container-2" style="flex-grow: 2">
      <h1>LINKS</h1>
      <h2>ABOUT US</h2>
      <h3>BLOG</h3>
      <h4>CONTACT US</h4>
      <h5>SHOP</h5>
      <h6>IT DEVELOPERS</h6>
    </div>
    <div className="footer-container-3" style="flex-grow: 2">
      <h1>recent news</h1>
      <h2>Best web development service <br>award</br></h2>
      <h3>SEPTEMBER 30, 2022</h3>
      <h4>Best service provider award</h4>
      <h5>SEPTEMBER 30, 2022</h5>
    </div>
    <div className="footer-container-4" style="flex-grow: 3">
      <h1>newsletter</h1>
      <h2>if you would like to get more information about<br> us and get from down below</br></h2>
      <div className="footer-email">
        <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xlevpvdb"
          method="post">
          <input type="email" maxlength="50" required placeholder="E-mail"/>
          <button class="button">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Footer;
