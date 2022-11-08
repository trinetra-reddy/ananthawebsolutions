import React from "react";
import "./Contactus.scss";


const Contactus = () => {
  return (
    <>
      <div className="Contactus-container">
        <div className="Contactus-header">
            <h1 className="Contactus-header1">Contacts</h1>
            <h6 className="Contactus-header2">Home/Contacts</h6>
        </div>
        <div className="Contactus-body">
        <div className="Contactus-form">
          <div className="Contactus-form1">
              <input className="Contactus-input" id="Contactus-input1" type="text" placeholder="Your Full Name" />
              <input className="Contactus-input" id="Contactus-input2" type="email" placeholder="Your Email Address" />
          </div>
          <div className="Contactus-form2">
             <input className="Contactus-input" id="Contactus-input3" type="text" placeholder="Your Phone Number" />
             <input className="Contactus-input" id="Contactus-input4" type="text" placeholder="Your Address" />
          </div>
          <div className="Contactus-form3">
           <input className="Contactus-input" id="Contactus-input5" type="text" placeholder="Enter Your Message Here..." />
          </div>
          <button className="Contactus-button" type="submit">Submit Message</button>
        </div>
        <div className="Contactus-map">
        </div>
        <div className="Contactus-footer">
          <div className="Contactus-company-address">
            <h6 className="Contactus-company-address-header">COMPANY ADDRESS</h6>
            <p className="Contactus-company-address-content">ThemeForest,Envato HQ 24 Fifth st., Los Angeles, USA</p>
          </div>
          <div className="Contactus-company-numbers">
            
            </div>
            <div className="Contactus-company-emails">
            
            </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Contactus;
