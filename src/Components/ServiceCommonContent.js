import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../Context/languageContext";
import serviceData from "../data/services";
import "../Style/serviceCommonContent.css";
import sendMoneyPhoto from "../img/sendmoneyService.webp";
const ServiceCommonContent = () => {
  const [servicedata, setServiceData] = useState({});
  const { id } = useParams();
  const data = [
    {
      _id: 1,
      identifier: "send-money",
      titleeng: "Send Money",
      titlebn: "সেন্ড মানি",
      descriptionbn:
        "মাত্র কয়েকটি ট্যাপে, আপনার বিকাশ একাউন্ট থেকে অন্য একাউন্টে অথবা অন্য যেকোনো মোবাইল নাম্বারে টাকা পাঠান যেকোনো মুহূর্তে। ",
      descriptionen:
        "With only a few taps, you can transfer money from your bKash Account to another, or to any other mobile number anytime, anywhere.",
      btn1titleen: "Send Money to Priyo Number",
      btn1titlebn: "প্রিয় নাম্বারে সেন্ড মানি",
      btn2titleen: "Send Money to Non-bKash User",
      btn2titlebn: "সেন্ড মানি টু নন বিকাশ",
      img: require("../img/sendmoneyService.webp"),
    },
    {
      _id: 2,
      identifier: "mobile-recharge",
      titleeng: "Mobile Recharge",
      titlebn: "মোবাইল রিচার্জ",
      descriptionbn:
        "মোবাইল রিচার্জ ​সেবার মাধ্যমে আপনি আপনার বিকাশ একাউন্ট থেকে মোবাইল রিচার্জ করতে পারবেন।  ",
      descriptionen:
        "Mobile Recharge allows you to recharge Mobile Airtime from your bKash Account",
      btn1titleen: "Latest Recharge Offer",
      btn1titlebn: "রিচার্জের সেরা অফার",
      btn2titleen: "Auto-Recharge",
      btn2titlebn: "অটো-রিচার্জ",
      img: require("../img/mobileRechargeService.webp"),
    },
    {
      _id: 3,
      identifier: "cash-out",
      titleeng: "Cash Out",
      titlebn: "ক্যাশ আউট",
      descriptionbn:
        "টাকা তুলুন দেশের সবচেয়ে বড় এজেন্ট এবং এটিএম নেটওয়ার্ক থেকে ",
      descriptionen:
        "Withdraw money from the largest agent and ATM network of Bangladesh",
      btn1titleen: "Cash Out from Agent",
      btn1titlebn: "এজেন্ট থেকে ক্যাশ আউট",
      btn2titleen: "Cash Out from ATM",
      btn2titlebn: "এটিএম থেকে ক্যাশ আউট",
      img: require("../img/cashoutService.webp"),
    },
  ];
  const [eng] = useContext(LanguageContext);
  useEffect(() => {
    const contentData = data.filter((content) => content.identifier == `${id}`);
    console.log(contentData);
    setServiceData(contentData[0]);
  }, [id]);
  console.log(servicedata);
  //   img.default
  return (
    <div className="common-container-gap">
      <div className="maincontainerbox">
        <div className="contentContainer">
          <div className="contentContainer__text">
            <h1>{eng ? servicedata.titleeng : servicedata.titlebn}</h1>
            <p className="descriptionp">
              {eng ? servicedata.descriptionen : servicedata.descriptionbn}
            </p>
            <div className="buttonContainer">
              <button className="btn-s-1">
                {eng ? servicedata.btn1titleen : servicedata.btn1titlebn}
              </button>
              <button className="btn-s-2">
                {eng ? servicedata.btn2titleen : servicedata.btn2titlebn}
              </button>
            </div>
          </div>
          <div className="contentContainer__img">
            <img src={servicedata.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCommonContent;
