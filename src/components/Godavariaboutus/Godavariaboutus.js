import React from "react";
import "./Godavariaboutus.scss";
import { DataValues } from "../../components";

const Godavariaboutus = () => {
  return (
    <>
      <div className="godavari-aboutus">
        <div className="godavari-aboutus-heading">
          <span className="aboutusheading1">About</span>
          <span className="aboutusheading2">Us</span>
        </div>
        <div className="godavari-aboutus-1">
          <div className="godavari-aboutus-1-left">
            <p>
              We were originally established as a constractor to major indias
              housebuilders
            </p>
          </div>
          <div class="godavari-aboutus-1-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              dolores laboriosam et itaque, eligendi tempore. Provident hic
              totam libero quia ad quidem. Rerum ipsa totam architecto a
              temporibus? Nostrum, fugit.
            </p>
          </div>
        </div>
        <div className="godavari-aboutus-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            incidunt illum harum voluptates quidem? Mollitia quis ipsam eius
            vero consequatur hic nobis quod, repellat deleniti porro doloremque
            incidunt totam asperiores! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloremque incidunt illum harum voluptates quidem?
            Mollitia quis ipsam eius vero consequatur hic nobis quod, repellat
            deleniti porro doloremqu
          </p>
        </div>
        <div className="godavari-aboutus-hr">
          <hr />
        </div>
        <div className="godavari-aboutus-columns">
          <DataValues
            heading="Total workers"
            count="400+"
            description="Workers with more than 10 year’s
service"
          />
          <DataValues
            heading="Years Experience"
            count="11+"
            description="HPR Godavari bulders and developers
are in this field"
          />
          <DataValues
            heading="Completed Projects"
            count="300+"
            description="Project bulded all over Andhra 
Pradesh and in Tamil Nadu"
          />
          <DataValues
            heading="Happy Costumers"
            count="1500k"
            description="People and familys have beautiful
future and happy"
          />
        </div>
      </div>
    </>
  );
};
export default Godavariaboutus;
