import React from "react";
import "./Footer.scss";
import footer_logo from '../../images/anantha_logo.jpg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="footer-main-container">
    <div className="footer-container-1" >
      <img src={footer_logo} className="footer_logo" alt="logo"/>
      <p>adipisicing elit.Suscipit autem praesentium Lorem ipsum dolor sit amet consectetur,</p>
      <h1>(c) ananthawebsolutions,2022. All Rights Reserved.</h1>
    </div>
    <div className="footer-container-2" >
      <h1>LINKS</h1>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT US</a></li>
        <li><a href="">BLOG</a></li>
        <li><a href="/contactus">CONTACT US</a></li>
        <li><a href="/services">SERVICES</a></li>
        
      </ul>
    </div>
    <div className="footer-container-3">
      <h1>recent news</h1>
      <h2>Best web development service award</h2>
      <h3>SEPTEMBER 30, 2022</h3>
      <h4>Best service provider award</h4>
      <h5>SEPTEMBER 30, 2022</h5>
    </div>
    <div className="footer-container-4" >
      <h1>newsletter</h1>
      <p>if you would like to get more information about</p>
      <p> us and get from down below</p>
      <div className="footer-email">
        <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xlevpvdb"
          method="post">
          <input type="email" maxLength="50" required placeholder="E-mail"/>
          <button className="button">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
  </>
  );
};

export default Footer;
