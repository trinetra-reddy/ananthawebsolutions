import React from "react";
import vectorImg from "./underline.png";
import client1 from "./happyboy.png";
import client2 from "./happygirl.png";
import "./HappyClients.scss";

const HappyClients = () => {
  return (
    <>
      <div className="happy-main">
        <div className="happy-heading">Happy Clients</div>
        <img
          className="happy-vector"
          src={vectorImg}
          alt="Happy-vector-img"
        ></img>
        <div className="happy-clients">
          <div className="client1">
            <div className="clientImg">
              <img className="happy-client-img" src={client1} alt="Client1"></img>
            </div>
            <div className="client-details">
              <div className="client-Name">Krishna Kanth</div>
              <p className="client-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam,quis nostrud exercitation.
              </p>
            </div>
            </div>
            <div className="client2">
              <div className="clientImg">
                <img className="happy-client-img" src={client2} alt="Client2"></img>
              </div>
              <div className="client-details">
                <div className="client-Name">Ramika sayn</div>
                <p className="client-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad minim veniam,quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="happy2">
            <div className="happy-video">
            <embed className="client-video" src="https://www.youtube.com/embed/9MfX6D9jXwo" autoplay controls ></embed>
            </div>
            <div className="happy-video">
            <embed className="client-video" src="https://www.youtube.com/embed/9MfX6D9jXwo" autoplay controls  ></embed>
            </div>
            <div className="happy-video">
            <embed className="client-video" src="https://www.youtube.com/embed/9MfX6D9jXwo" autoplay controls ></embed>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default HappyClients;
