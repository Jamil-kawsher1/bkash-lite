import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Style/services.css";
import service1 from "../img/01-send-money_1666154832042.png";
import service2 from "../img/02-mobile-recharge_1666155167971.png";
import service3 from "../img/03-cash-out_1666158620022.png";
import service4 from "../img/04-payment_1666159400113.png";
import service5 from "../img/05-add-money_1666160847291.png";
import service6 from "../img/06-pay-bill_1666162662135.png";
import service7 from "../img/07-savings_1666167828748.png";
import service8 from "../img/08-loan_1669656798833.png";
import service9 from "../img/09-remittance_1666168732360.png";
import service10 from "../img/10-transfer-money_1666169481952.png";
import service11 from "../img/11-education_1669657823727.png";
import service12 from "../img/12-NGO_1669658036501.png";
import service13 from "../img/13_1669034799648.png";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <Swiper
      spaceBetween={1}
      breakpoints={{
        // when window width is >= 640px
        460: {
          width: 460,
          slidesPerView: 6,
        },
        640: {
          width: 640,
          slidesPerView: 6,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 8,
        },
        1080: {
          width: 1080,
          slidesPerView: 10,
        },
      }}
      autoplay={{
        delay: 2000,
      }}
      modules={[Navigation]}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link className="service-links" to="#">
          <span className="service-main-div">
            <img style={{ width: "60px" }} src={service1} alt="" />
            <h6 className="text-center">লোন</h6>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service2} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service3} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service4} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service5} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service6} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service7} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service8} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service9} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service10} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service11} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service12} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="service-links" to="#">
          <div className="service-main-div">
            <img style={{ width: "60px" }} src={service13} alt="" />
            <h6 className="text-center">লোন</h6>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Services;
