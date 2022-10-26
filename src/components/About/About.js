import React from "react";
import './About.scss';
import Aboutus from './Aboutus.jpeg'
   
const About = () => {
    return <>
           <div className="about-main">
                <div><img className="img" src={Aboutus} alt="About us"/></div>
                <div className="content">
                    <h5 className="heading">ABOUT US</h5>
                    <div className="content-wrapper">We are the Pioneers Of IT Development</div>
                    <p class="text">Sed lobortis vehicula eros.In efficitur,mi ac phareta suscipit,lectus est
                        elementum ligula, in dictum odio urna velnulla.Curabitur viverra sed velit 
                        quis viverra.Sed eget viverra tellus. Maecenas sollicitudin nisl nibh,
                    euullamcorper erat convillas vel.Morbi feugiat commodo elit eu dictum.                    </p>
                </div>
                <div className="num-box-item">
                    <div className="">124</div>
                    <div className="">Projects</div>
                     
                </div>
                <div>
                    <div className="">97</div>
                    <div className="">clients</div>
                     
                </div>
                <div>
                    <div className="">105</div>
                    <div className="">employee</div>
                     
                </div>
           </div>
    </>;
}
export default About;