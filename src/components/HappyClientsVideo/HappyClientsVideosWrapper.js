import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HappyClientsVideos from "./HappyClientsVideos";


const HappyClientsVideosWrapper = (props) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null);
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
                className="clientsvideos-swiper"
            >
                <SwiperSlide>
                    <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
                </SwiperSlide>
                <SwiperSlide>
                    <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
                </SwiperSlide>
                <SwiperSlide>
                    <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
                </SwiperSlide>
                <SwiperSlide>
                    <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default HappyClientsVideosWrapper;