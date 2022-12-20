import React from "react";

import whatsnew1 from "../img/whatsnew1.webp";
import whatsnew2 from "../img/whatsnew2.webp";
import whatsnew3 from "../img/whatsnew3webp.webp";
import "../Style/whatsnew.css";
const WhatsNew = () => {
  return (
    <div className="common-container-gap">
      <h2 className="text-center common-title-gap title">
        What's New in bKash
      </h2>
      <div className="whatsNewMainContainer common-container">
        <div className="whatsNewContent__Box common-gap-grid ">
          <img className="responsive-img" src={whatsnew1} alt="" />
          <h3>
            Bangabandhu Inter University Sports prize disbursed through bKash
          </h3>
          <span>Posted on 05 dec,2022 |2 mins Read </span>
        </div>
        <div className="whatsNewContent__Box common-gap-grid ">
          <img className="responsive-img" src={whatsnew2} alt="" />
          <h3>
            Bangabandhu Inter University Sports prize disbursed through bKash
          </h3>
          <span>Posted on 05 dec,2022 |2 mins Read </span>
        </div>
        <div className="whatsNewContent__Box common-gap-grid ">
          <img className="responsive-img" src={whatsnew3} alt="" />
          <h3>
            Bangabandhu Inter University Sports prize disbursed through bKash
          </h3>
          <span>Posted on 05 dec,2022 |2 mins Read </span>
        </div>
      </div>
      <div className="whatsNewButtonContainer">
        <button className="whatsNewContent__Box--button">See All</button>
      </div>
    </div>
  );
};

export default WhatsNew;
