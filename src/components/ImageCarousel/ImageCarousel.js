import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Carouselimage1 from "../../images/Appartment.jpg";
import Carouselimage2 from "../../images/Carouselimage2.jpg";
import Carouselimage3 from "../../images/Carouselimage3.jpg";

const ImageCarousel = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null);

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
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
                className="ImageCarousel-swiper"
            >
                <SwiperSlide>
                    <img className="CarouselImage" src={Carouselimage1} alt="Carouselimage1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="CarouselImage" src={Carouselimage2} alt="Carouselimage2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="CarouselImage" src={Carouselimage3} alt="Carouselimage3" />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default ImageCarousel;