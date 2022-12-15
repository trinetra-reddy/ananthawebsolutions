import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Floorplan.scss';
import Title from '../Title/Title';
import vector from "./Vector.svg";
import vector1 from "./vector1.svg";
const Floorplan = (props) => {
<<<<<<< HEAD
  return (
    <>
      <div className="floorplan-main">
        <Title name="Floor" name2=" Plan" />
        <div className="floorplan-wrapper">
          <div className="floorplan-text">
            Build by best engineers and created best floor plan
          </div>
          <div className={`{props.background}`}>
            <button className="prop-button1 col-2"><img className="prop-button-img" src={vector} alt="vector" /></button>
            <button className="prop-button2 col-3">next<img className="prop-button-img1" src={vector1} alt="vector" /> </button>
          </div>
        </div>
        <div className={`floorplan-img ${props.background}`}>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="propeties-swiper"
          >
            <SwiperSlide>
              <img className="floorplan-img1" src={props.img1} alt="typical-floorplan" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="floorplan-img2" src={props.img2} alt="stilt-floorplan" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="floorplan-img1" src={props.img1} alt="typical-floorplan" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="floorplan-img2" src={props.img2} alt="stilt-floorplan" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
=======
     return (
       <>
          <div className="floorplan-main">
            <Title name="Floor" name2=" Plan" />
            <div className="row">
            <div className="floorplan-wrapper ">
          <div className="floorplan-text col-10 ">
          Build by best engineers and created best floor plan
          </div>
          <div className={`{props.background}`}> 
            <button className="prop-button1 col-1"><img className="prop-button-img" src={vector} alt="vector" /></button> 
                 <button className="prop-button2 col-1">next<img className="prop-button-img1" src={vector1} alt="vector" /> </button>
            </div>
            </div>
            </div>
          <div className={`floorplan-img ${props.background}`}>
            <img className="floorplan-img1" src={props.img1}alt="typical-floorplan" />
            <img className="floorplan-img2" src={props.img2} alt="stilt-floorplan" />
          </div>
          
          </div>
       </>
     );
>>>>>>> cfa689e034adfeba24240d399ba200bae56f0a07
}
export default Floorplan;