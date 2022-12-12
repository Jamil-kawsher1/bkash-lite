import React, { useContext } from "react";
import { Link } from "react-router-dom";

import mackup1 from "../img/02-mobile-recharge_1669614234196.webp";
import "../Style/mockup.css";
import "../Style/mediaQuires.css";
import { LanguageContext } from "../Context/languageContext";
const Mockup = () => {
  const [eng, setEng] = useContext(LanguageContext);
  return (
    <section className="mockup-2nd-sec common-container">
      <h2 className="text-center">
        {eng
          ? "One Platform for all Financial Solutions"
          : "সব আর্থিক সল্যুশন এক প্ল্যাটফর্মে"}
      </h2>

      <div className="mockup-inner-continer">
        <div className="mockup--1 common-mockup">
          <img src={mackup1} alt="" />
          <h4>{eng ? "Mobile Recharge" : "মোবাইল রিচার্জ"}</h4>
          <p>
            {eng
              ? "Recharge Any Number and get The best Offer"
              : "রিচার্জ করুন যেকোনো নাম্বারে, সেরা অফারের সাথে।"}
          </p>
          <Link to="#">Learn More</Link>
        </div>
        <div className="mockup--2 common-mockup">
          <img src={mackup1} alt="" />
          <h4>Mobile Recharge</h4>
          <p>Recharge Any Number and get The best Offer</p>
          <Link to="#">Learn More</Link>
        </div>
        <div className="mockup--3 common-mockup">
          <img src={mackup1} alt="" />
          <h4>Mobile Recharge</h4>
          <p>Recharge Any Number and get The best Offer</p>
          <Link to="#">Learn More</Link>
        </div>
        <div className="mockup--4 common-mockup">
          <img src={mackup1} alt="" />
          <h4>Mobile Recharge</h4>
          <p>Recharge Any Number and get The best Offer</p>
          <Link to="#">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
