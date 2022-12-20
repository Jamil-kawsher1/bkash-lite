import React, { useContext } from "react";
import { Link } from "react-router-dom";

import mackup1 from "../img/02-mobile-recharge_1669614234196.webp";
import "../Style/mockup.css";
import { LanguageContext } from "../Context/languageContext";
import Services from "./Services";
const Mockup = () => {
  const [eng, setEng] = useContext(LanguageContext);
  return (
    <section className="mockup-2nd-sec ">
      <h2 className="text-center">
        {eng
          ? "One Platform for all Financial Solutions"
          : "সব আর্থিক সল্যুশন এক প্ল্যাটফর্মে"}
      </h2>

      <div className="mockup-inner-continer common-container">
        <div className="mockup--1 common-mockup">
          <img src={mackup1} alt="" />
          <h4>{eng ? "Mobile Recharge" : "মোবাইল রিচার্জ"}</h4>
          <p>
            {eng
              ? "Recharge Any Number and get The best Offer"
              : "রিচার্জ করুন যেকোনো নাম্বারে, সেরা অফারের সাথে।"}
          </p>
          <Link to="#">{eng ? "Learn More" : " বিস্তারিত জানুন"}</Link>
        </div>
        <div className="mockup--2 common-mockup">
          <img src={mackup1} alt="" />
          <h4>Mobile Recharge</h4>
          <p>Recharge Any Number and get The best Offer</p>
          <Link to="#"> {eng ? "Learn More" : " বিস্তারিত জানুন"}</Link>
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

      <div className="mockup-services common-container">
        <h2 className="text-center common-title-gap styled-text">
          <span>
            {eng
              ? "Learn More about bKash Services"
              : "বিকাশ-এর সার্ভিস সম্পর্কে আরো জানুন"}
          </span>
        </h2>
        <h4 className="mockup-title text-center common-title-gap">
          {eng
            ? "Learn More about bKash Services"
            : "বিকাশ-এর সার্ভিস সম্পর্কে আরো জানুন"}
        </h4>
        <Services />
      </div>
    </section>
  );
};

export default Mockup;
