import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bkcover1 from "../img/bkcover1.png";
import bkcover2 from "../img/bk2cover.png";
import bkcover3 from "../img/bk3cover.png";
import "../Style/designSystem.css";
import Navbar from "./Navbar";
import { Autoplay, Navigation } from "swiper";
const Slider = () => {
  return (
    <div className="slider-view">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        onSlideChange={() => console.log("slide change")}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slider-view responsive-img">
          <img className="responsive-img" src={bkcover1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider-view">
          <img className="responsive-img" src={bkcover2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider-view">
          <img className="responsive-img" src={bkcover3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
