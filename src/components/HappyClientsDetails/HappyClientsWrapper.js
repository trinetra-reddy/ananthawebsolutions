import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import happyimg2 from "../../images/HappyClients/happyboy.png";
import happyimg3 from "../../images/HappyClients/happygirl.png";
import HappyClientsDetails from './HappyClientsDetails';


const HappyClientsWrapper=()=>{
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null);
    const happyClientDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation';

    return (
        <>       
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
                      className="clients-swiper"
                >
                    <SwiperSlide>
                        <HappyClientsDetails happyContent={happyClientDes} image2={happyimg2} client1="Krishna Kanth" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HappyClientsDetails happyContent={happyClientDes} image2={happyimg3} client1="Ramika sayn" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HappyClientsDetails happyContent={happyClientDes} image2={happyimg2} client1="Trinethra Reddy" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HappyClientsDetails happyContent={happyClientDes} image2={happyimg3} client1="Giridhar" />
                    </SwiperSlide>                    
                </Swiper>
            
        </>
    );
};

export default HappyClientsWrapper;