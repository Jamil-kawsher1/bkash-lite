import React, { useState } from "react";

import "../Style/experience.css";
import boxcaresol4 from "../img/box-carousel-04.webp";

const Experince = () => {
  const handleExpeinceClick = (id) => {
    setClickId(id);
  };
  const [clickid, setClickId] = useState(1);
  return (
    <div className="common-container">
      <div className="experinceMainContainer">
        <div className="experince__Box1">
          <div className="experince-box-innerdiv-controller">
            <div className=" experincetext">
              <h2 className="title" onClick={() => handleExpeinceClick(1)}>
                ব্যাবহারকারীর তথ্য হালনাগাদ{" "}
              </h2>
              <p className="body-text">
                অ্যাপ থেকে সহজেই গ্রাহক তথ্য হালনাগাদ করুন
              </p>
            </div>
            <div className="circleParent">
              <div
                className={clickid === 1 ? "circle-big" : "circle-small"}
              ></div>
            </div>
          </div>
        </div>
        <div className="experince__Box2">
          <div className="experince-box-innerdiv-controller">
            <div className=" experincetext">
              <h2 className="title" onClick={() => handleExpeinceClick(2)}>
                নিরাপদ লেনদেন
              </h2>
              <p className="body-text">
                নিরাপদ লেনদেন করতে গ্রাহক, এজেন্ট ও মার্চেন্ট QR কোড স্ক্যান
                করুন।
              </p>
            </div>
            <div className="circleParent">
              <div
                className={clickid === 2 ? "circle-big" : "circle-small"}
              ></div>
            </div>
          </div>
        </div>
        <div className="experince__Box3">
          <div className="experince-box-innerdiv-controller">
            <div className=" experincetext">
              <h2 className="title" onClick={() => handleExpeinceClick(3)}>
                বিকাশ পিন ও ভেরিফিকেশন কোড
              </h2>
              <p className="body-text">
                পিন এবং ভেরিফিকেশন কোড দিয়ে নিরাপদ লেনদেন
              </p>
            </div>
            <div className="circleParent">
              <div
                className={clickid === 3 ? "circle-big" : "circle-small"}
              ></div>
            </div>
          </div>
        </div>
        <div className="experince__Box4">
          <div className="experince-box-innerdiv-controller">
            <div className=" experincetext">
              <h2 className="title" onClick={() => handleExpeinceClick(4)}>
                কার্ড-এর তথ্যের নিরাপত্তা
              </h2>
              <p className="body-text">
                বিকাশ পেমেন্ট কার্ড ইন্ডাস্ট্রি'র সিকিউরিটি স্ট্যান্ডার্ড এর
                প্রতিপালন করে
              </p>
            </div>
            <div className="circleParent">
              <div
                className={clickid === 4 ? "circle-big" : "circle-small"}
              ></div>
            </div>
          </div>
        </div>
        <div className="experince__img-1 common-experince-img">
          <img className="experinceImg-control " src={boxcaresol4} alt="" />
        </div>
        <div className="experince__img-2 common-experince-img"></div>
      </div>
    </div>
  );
};

export default Experince;
