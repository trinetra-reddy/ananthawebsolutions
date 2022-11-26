import React from "react";
import "./Specifications.scss";
import structure1Icon from "./icons/structure1.svg";
import structure2Icon from "./icons/structure2.svg";
import electricalIcon from "./icons/electrical.svg";
import flooringIcon from "./icons/flooring.svg";
import facilitiesIcon from "./icons/facilities.svg";
import kitchenIcon from "./icons/kitchen.svg";
import waterIcon from "./icons/water.svg";
import paintIcon from "./icons/paint.svg";
import featuresIcon from "./icons/features.svg";
import lobbyIcon from "./icons/lobby.svg";
import toiletIcon from "./icons/toilet.svg";
import doorIcon from "./icons/door.svg";

const Specifications = () => {
  return (
    <>
      <div className="Specify-main-container">
        <div className="Specify-header-wrapper">
          <h3 className="Specify-header">Specifications</h3>
          <div className="Specify-header-border"></div>
        </div>
        <div className="Specify-grid-container">
          <div className="Specify-structure1-grid>">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={structure1Icon}
                alt="Structure Icon"
              />
              <h6 className="Specify-div-header">Building structure</h6>
            </div>
            <p className="Specify-div-content">
              RCC framed structure with brick walls designed for isolated
              foundation.
            </p>
          </div>
          <div className="Specify-structure2-grid>">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={structure2Icon}
                alt="Structure Icon"
              />
              <h6 className="Specify-div-header">Building structure</h6>
            </div>
            <p className="Specify-div-content">
              3 tracks UPVC sliding windows with sound proof & safety grill with
              Mosquito Mesh.
            </p>
          </div>
          <div className="Specify-electricals-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={electricalIcon}
                alt="Electricals Icon"
              />
              <h6 className="Specify-div-header">Electricals</h6>
            </div>
            <p className="Specify-div-content">
              Wiring concealed with fire resistant wires. (Finolex, Anchor &
              Roma Switches) Provision for split AC in all bedrooms & Living
              Area.<br></br> Adequate points for lights, fans & other plugs in
              bedrooms, toilets and kitchen with modular switches of reputed
              brand. Exhaust fans & geysers points in toilets Plug points for
              chimney, water purifier, refrigerator & other kitchen appliances
              in kitchen. TV points in living & Master bedrooms. Telephone
              points in living & master bedrooms.
            </p>
          </div>
          <div className="Specify-flooring-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={flooringIcon}
                alt="Flooring Icon"
              />
              <h6 className="Specify-div-header">Flooring</h6>
            </div>
            <p className="Specify-div-content">
              Living bedroom, dining area vetrified 2'6" x 2'6" tiles dado upto
              3 height above kitchen platform.<br></br> Toilets- Anti skid tiles
              flooring with ceramic tiles dado up to door height (1'0x2'0") in
              master bedroom toilet. <br></br>Anti skid ceramic tiles flooring
              with ceramic tiles dado up to door height (1'0x2'0") in other
              toilets.<br></br>
              Balconies - Anti skid ceramic tiles with water proofing treatment.
              <br></br>
              Utilities - Anti skid ceramic tiles with water proofing treatment
              and dado up to 3 feet height.
            </p>
          </div>
          <div className="Specify-facilities-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={facilitiesIcon}
                alt="Facilities Icon"
              />
              <h6 className="Specify-div-header">Common Facilities</h6>
            </div>
            <p className="Specify-div-content">
              Automatic Generator for common area & Every flat lighting
              circuits. <br></br>Electrical vehicles charging power point
              provision in parking area. Natural rain water for drinking purpose
              provides in Kitchen. <br></br>Anti skid Parking tiles.
            </p>
          </div>
          <div className="Specify-kitchen-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={kitchenIcon}
                alt="Kitchen Icon"
              />
              <h6 className="Specify-div-header">Kitchen</h6>
            </div>
            <p className="Specify-div-content">
              Granite cooking platform with steel sink. CP fittings of Jaguar or
              equivalent make.
            </p>
          </div>
          <div className="Specify-water-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={waterIcon}
                alt="Water Icon"
              />
              <h6 className="Specify-div-header">Water</h6>
            </div>
            <p className="Specify-div-content">
              24 hours water supply from Borewell and Corporation.
            </p>
          </div>
          <div className="Specify-paint-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={paintIcon}
                alt="Paint Icon"
              />
              <h6 className="Specify-div-header">External & internal paint</h6>
            </div>
            <p className="Specify-div-content">
              Plaster of paris (POP) in hall, <br></br>External wall: 1 coat of
              primer & 2 coats of Asian paint. <br></br>All internal walls:
              Emulsion paint with 2 coats of wall putty.
            </p>
          </div>
          <div className="Specify-features-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={featuresIcon}
                alt="Features Icon"
              />
              <h6 className="Specify-div-header">Security features</h6>
            </div>
            <p className="Specify-div-content">
              Round the clock security. CCTV with recording system. Intercom
              facility with entrance gate from each apartment.
            </p>
          </div>
          <div className="Specify-lobby-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={lobbyIcon}
                alt=" Lobby & lift Icon"
              />
              <h6 className="Specify-div-header">Lobby & lifts</h6>
            </div>
            <p className="Specify-div-content">
              Entrance lobby finished with Wooden tiles flooring, wall tiles for
              main door wall. Automatic two individual ess lifts with 5
              passenger capacity
            </p>
          </div>
          <div className="Specify-toilets-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={toiletIcon}
                alt="Toilet Icon"
              />
              <h6 className="Specify-div-header">Toilets</h6>
            </div>
            <p className="Specify-div-content">
              CP fittings of Jaguar, parryware or equivalent make.<br></br>{" "}
              Concealed piping system for cold & hot water with provision for
              geysers.
              <br></br>Porcelain sanitary wares of reputed brand. <br></br>White
              WC of reputed brand.
            </p>
          </div>
          <div className="Specify-doors-grid">
            <div className="Specify-div-header-wrapper">
              <img
                className="Specify-div-icon"
                src={doorIcon}
                alt="Door Icon"
              />
              <h6 className="Specify-div-header">Doors</h6>
            </div>
            <p className="Specify-div-content">
              Main door: Teak wood door frame with Teak wood shutters. Bedrooms
              : Matti door frames with laminated print flush doors. Toilets: WPC
              solid frame with WPC solid doors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specifications;
