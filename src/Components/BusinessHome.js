import React from "react";

import businessImg1 from "../img/1-online-business.webp";
import businessImg2 from "../img/2-merchant_1666263856311.webp";
import businessImg3 from "../img/03-education-institute_1666262925655.webp";
import businessImg4 from "../img/04-corporate-_-business_1666262309776.webp";
import businessImg5 from "../img/05-NGO_1666262448062.webp";
import businessImg6 from "../img/06-agent_1666264866359.webp";
import homepageBusiness from "../img/homepage-business-static.webp";
import "../Style/businessHome.css";
const BusinessHome = () => {
  return (
    <div className="text-center">
      <h2>ব্যবসার জন্য বিকাশ</h2>
      <p>
        বিকাশ-এর আর্থিক সল্যুশনের মাধ্যমে আপনার ব্যবসায়িক লেনদেন করতে পারবেন আরো
        দ্রুত, সহজে ও নিরাপদে। তাই আরো দক্ষভাবে ব্যবসা পরিচালনা করুন বিকাশ এর
        মাধ্যমে।
      </p>

      <div className="businessHomeInnerContainer">
        <div className="businessHomeInnerContainer__boxes">
          <div className="businessHomeInnerContainer__boxes--CommonBox">
            <div>
              <img
                className="busineesHomeCommonImg"
                src={businessImg1}
                alt="Online Business"
              />
            </div>
            <h5>অনলাইন ব্যবসা</h5>
          </div>
          <div className="businessHomeInnerContainer__boxes--CommonBox">
            <div>
              <img
                className="busineesHomeCommonImg"
                src={businessImg2}
                alt="Merchent"
              />
            </div>
            <h5>মার্চেন্ট</h5>
          </div>
          <div className="businessHomeInnerContainer__boxes--CommonBox">
            <div>
              <img
                className="busineesHomeCommonImg"
                src={businessImg3}
                alt="Merchent"
              />
            </div>
            <h5>মার্চেন্ট</h5>
          </div>
          <div className="businessHomeInnerContainer__boxes--CommonBox">
            <div>
              <img
                className="busineesHomeCommonImg"
                src={businessImg4}
                alt="Merchent"
              />
            </div>
            <h5>মার্চেন্ট</h5>
          </div>
          <div className="businessHomeInnerContainer__boxes--CommonBox">
            <div>
              <img
                className="busineesHomeCommonImg"
                src={businessImg5}
                alt="Educational Insttitute"
              />
            </div>
            <h5>শিক্ষা প্রতিষ্ঠান</h5>
          </div>
          <div className="businessHomeInnerContainer__boxes--CommonBox">
            <div>
              <img
                className="busineesHomeCommonImg"
                src={businessImg6}
                alt=""
              />
            </div>
            <h5>মার্চেন্ট</h5>
          </div>
        </div>

        <div className="businessHomeInnerContainer__img">
          <img
            src={homepageBusiness}
            alt=""
            className="businessHomeInnerContainer__img--img responsive-img"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;
