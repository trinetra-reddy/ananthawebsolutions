import React from "react";
import vectorhappyClientsImg from "./underline.png";
import happyclient1 from "./happyboy.png";
import happyclient2 from "./happygirl.png";
import "./HappyClients.scss";

const HappyClients = (props) => {
  return (
    <>
      <div className={`happyclients-main ${props.parentClass}`}>
        <div className="happyclients-heading">Happy Clients</div>
        <img
          className="happyclients-vector"
          src={vectorhappyClientsImg}
          alt="HappyClients-vector-img"
        ></img>
        <div className="happy-clients">
          <div className="client1">
            <div className="clientImg">
              <img className="happy-client-img" src={happyclient1} alt="Client1"></img>
            </div>
            <div className="happyclients-details">
              <div className="happyclients-Name">Krishna Kanth</div>
              <p className="happyclients-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam,quis nostrud exercitation.
              </p>
            </div>
            </div>
            <div className="client2">
              <div className="clientImg">
                <img className="happy-client-img" src={happyclient2} alt="Client2"></img>
              </div>
              <div className="happyclients-details">
                <div className="happyclients-Name">Ramika sayn</div>
                <p className="happyclients-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad minim veniam,quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="happy2">
            <div className="happyclients-video">
            <embed className="happyclients-video" src="https://www.youtube.com/embed/9MfX6D9jXwo" autoplay controls ></embed>
            </div>
            <div className="happyclients-video">
            <embed className="happyclients-video" src="https://www.youtube.com/embed/9MfX6D9jXwo" autoplay controls  ></embed>
            </div>
            <div className="happyclients-video">
            <embed className="happyclients-video" src="https://www.youtube.com/embed/9MfX6D9jXwo" autoplay controls ></embed>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default HappyClients;
