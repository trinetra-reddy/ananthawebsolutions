import React from "react";
import "./Footer.scss";
import footer_logo from '../../images/anantha_logo.jpg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-container-1" >
          <img src={footer_logo} className="footer_logo" alt="logo" />
          <p>adipisicing elit.Suscipit autem praesentium Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </p>
          <h1>(c) ananthawebsolutions,2022. All Rights Reserved.</h1>
        </div>
        <div className="footer-container-2" >
          <div className="content">LINKS</div>
          <div className="links">
            <div className="link_1"><Link className="footer-a" to="/">HOME</Link></div>
            <div className="link_1"><Link className="footer-a" to="/about-us">ABOUT US</Link></div>
            <div className="link_1"><Link className="footer-a" to="">BLOG</Link></div>
            <div className="link_1"><Link className="footer-a" to="/contact-us">CONTACT US</Link></div>
            <div className="link_1"><Link className="footer-a" to="/services">SERVICES</Link></div>
          </div>
        </div>
        <div className="footer-container-3">
          <h2>RECENT NEWS</h2>
          <div className="content_1">Best web development service award</div>
          <div className="content_2">SEPTEMBER 30, 2022</div>
          <div className="content_3">Best service provider award</div>
          <div className="content_4">SEPTEMBER 30, 2022</div>
        </div>
        <div className="footer-container-4" >
          <h4>NEWSLETTER</h4>
          <p>if you would like to get more information about us and get from down below</p>
          <div className="footer-email">
            <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xlevpvdb"
              method="post">
              <input type="email" maxLength="50" required placeholder="E-mail" />
              <button className="button">Subscribe</button>
            </form>
          </div>
        </div>
        </div>
    </>
  );
};

export default Footer;
