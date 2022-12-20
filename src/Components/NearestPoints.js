import React from "react";

import nearest1 from "../img/nearest1.webp";
import nearest2 from "../img/nearest2webp.webp";
import nearest3 from "../img/nearest3.webp";
import nearest4 from "../img/nearest4.webp";
import "../Style/nearestPoint.css";
const NearestPoints = () => {
  return (
    <div className="common-container">
      <h2 className="text-center">Nearest bKash Touchpoints</h2>
      <div className="nearestPoint__MainContainer">
        <div
          data-aos-duration="2000"
          data-aos="fade-right"
          className="nearestPoint__MainContainer-box-1 common-gap-grid"
        >
          <h2>Agent Point</h2>
          <p>Learge Number of Active Agent Point all Over the Bangladesh</p>
          <img src={nearest1} alt="" />
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-left"
          className="nearestPoint__MainContainer-box-2 common-gap-grid"
        >
          <h2>Agent Point</h2>
          <p>Learge Number of Active Agent Point all Over the Bangladesh</p>
          <img src={nearest2} alt="" />
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-right"
          className="nearestPoint__MainContainer-box-3 common-gap-grid"
        >
          <h2>Agent Point</h2>
          <p>Learge Number of Active Agent Point all Over the Bangladesh</p>
          <img src={nearest3} alt="" />
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-left"
          className="nearestPoint__MainContainer-box-4 common-gap-grid"
        >
          <h2>Agent Point</h2>
          <p>Learge Number of Active Agent Point all Over the Bangladesh</p>
          <img src={nearest4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NearestPoints;
