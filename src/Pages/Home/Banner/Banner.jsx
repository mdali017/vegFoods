import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import sliderImg1 from '../../../assets/Image/Slider/bg_2.jpg'
import sliderImg2 from '../../../assets/Image/Slider/bg_1.jpg'
import sliderImg3 from '../../../assets/Image/Slider/bg_3.jpg'

const Banner = () => {
   
    return (
        <div>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={sliderImg1} className='absolute' alt="" />
            <h1 className='text-black'>All Text Here...</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sliderImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={sliderImg3} alt="" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;