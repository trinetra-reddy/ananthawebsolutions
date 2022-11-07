import React from "react";
import "./Companymissiontext.scss";
import Rectangle41 from "./Rectangle41.svg";
const Companymissiontext = () => {
  return (
    <>
      <div className="companymission-text-main">
        <div>
          <img
            className="companymission-text"
            src={Rectangle41}
            alt="mission"
          />
        </div>
        <div className="cm-right-text">
            <p className="companymission-text-heading">Company Mission</p>
          <p className="cm-text-wrapper">
            "Success is based on pro-active and dedicated teamwork in a
            professional and ethical environment..."
          </p>
          <p className="cm-txt-wrapper">
            We strongly believe that success is based on pro-active and
            dedicated teamwork in a professional and ethical environment that
            leads to creative solutions and fully deserved rewards. This said,
            we always focus on safety, quality, a detailed approach, and above
            all, diligent handling of budgetary means to maintain high standards
            at all levels of our activities, especially in dealings with
            employees, suppliers, subcontractors, and customers.
          </p>
        </div>
      </div>
    </>
  );
};
export default Companymissiontext;
