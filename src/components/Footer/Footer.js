import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <ul className="division1">
          <li className="logo">Anantha</li>
          <li className="para">
            {" "}
            Our business accounting packages are tailored to suit your
            individual financial requirements and unique business needs.
          </li>
          <li className="copyright">(c) Anantha,2022.All Rights Reserved. </li>
        </ul>
        <ul className="division2">
          <li className="link">links</li>
          <li>ABOUT US</li>
          <li>BLOG</li>
          <li>CONTACT US</li>
          <li>IT DEVELOPERS</li>
        </ul>
        <ul className="division3">
          <li className="recent">recent news</li>
          <li className="text">
            5 Incredibly Useful Water Tips For Small Businesses
            <div className="foot">May,2022</div>
          </li>
          <li>
            Little Known Ways To Rid Yourself Of Banana
            <div className="foot">May,2022</div>
          </li>
        </ul>
        <ul>
          <li className="news">newsletter</li>
          <li>
            If you would like more information on how call our consultants could
            help your business, contact us today.
          </li>
          <form
            id="fs-frm"
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/f/xlevpvdb"
            method="post"
          >
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="E-mail"
              required=""
            ></input>
          </form>
        </ul>
      </div>
    </>
  );
};

export default Footer;
