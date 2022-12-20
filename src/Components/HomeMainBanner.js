import React from "react";

import bakshApp from "../img/static-banner-content.png";
import "../Style/homeMainBanner.css";
const HomeMainBanner = () => {
  return (
    <div className="mainContianerHomeBanner">
      <div className="mainContianerHomeBanner__InnerContainer">
        <div className="mainContianerHomeBanner__InnerContainer--text">
          <h2
            data-aos-duration="2000"
            data-aos="flip-up"
            className="color-primary"
          >
            বিকাশ এ্যাপ ডাউনলোড করুন
          </h2>
          <p
            data-aos-duration="2000"
            data-aos="flip-up"
            className="color-white"
          >
            বিকাশ অ্যাপ থেকে সহজেই একাউন্ট খুলে বুঝে নিন ১২৫ টাকা পর্যন্ত বোনাস!
          </p>
          <div className="mainContianerHomeBanner__InnerContainer--text-app">
            <img src="" alt="" /> <img src="" alt="" />
          </div>
        </div>
        <div className="mainContianerHomeBanner__InnerContainer--img">
          <img
            data-aos-duration="2000"
            data-aos="fade-up"
            className="bkash-banner-img"
            src={bakshApp}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMainBanner;
