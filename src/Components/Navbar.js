import React, { useContext, useEffect, useRef, useState } from "react";
import "../Style/navbar.css";
import bkash from "../img/BKash-Icon2-Logo.wine.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "../Style/mediaQuires.css";
import { LanguageContext } from "../Context/languageContext";
const Navbar = () => {
  const [isMenueOpen, setIsMenuOpen] = useState(false);
  const [eng, setEng] = useContext(LanguageContext);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenueOpen);
  };
  useEffect(() => {
    // document.addEventListener("click", handleOutsideMenuClick);
  }, []);
  const mobileMenuRef = useRef();
  const menucloseRef = useRef();

  const handleOutsideMenuClick = (e) => {
    if (
      !mobileMenuRef.current.contains(e.target) &&
      !menucloseRef.current.contains(e.target)
    ) {
      console.log("clicked out side");
    } else {
      console.log("Clicked Inside");
    }
  };

  // const handleLanguage = () => {};
  return (
    <div className="nav-view">
      <nav>
        <div className="container navbar-content">
          <div className="logo">
            {eng ? <span>bkash</span> : <span> বিকাশ</span>}
            <img src={bkash} alt="" />
          </div>
          <div className="nav-link">
            <NavLink className="common-nav-link" to="/campaign">
              {eng ? "Campaigns" : "ক্যাম্পেইন"}
            </NavLink>
            <NavLink className="common-nav-link" to="/services">
              {eng ? "Services" : " সার্ভিসেস"}
            </NavLink>
            <NavLink className="common-nav-link" to="/business">
              {eng ? "Business" : " বিজনেস"}
            </NavLink>
            <NavLink className="common-nav-link" to="/help">
              {eng ? "Help" : " হেল্প"}
            </NavLink>
            <NavLink className="common-nav-link" to="/carrer">
              {eng ? "Career" : " ক্যারিয়ার"}
            </NavLink>
            <NavLink className="common-nav-link" to="/about">
              {eng ? "About" : " পরিচিতি"}
            </NavLink>
          </div>
          <div className="nav-other">
            <button className="btn-nav">
              {eng ? <span>bkash App</span> : <span>বিকাশ এ্যাপ</span>}
            </button>
            <span className="lang-select">
              <span
                className={eng && "lang-select-bold"}
                onClick={() => setEng(true)}
              >
                ENG
              </span>{" "}
              |
              <span
                className={!eng && "lang-select-bold"}
                onClick={() => setEng(false)}
              >
                {" "}
                বাংলা
              </span>
            </span>
            <span onClick={handleMenuOpen} className="menu-icon">
              <span className="menu-icon-text">মেনু</span> <AiOutlineMenuFold />
            </span>

            <div></div>
          </div>
        </div>
      </nav>
      {isMenueOpen && (
        <div ref={mobileMenuRef} className="nav-mobile-menu">
          <div className="menu-close">
            <div className="close-btn-slogan">
              <AiOutlineClose onClick={handleMenuOpen} />
              <div>
                <span className="brand-f-letter">বি</span>কাশ
              </div>
            </div>

            <div className="mobile-menu-links-collection">
              <Link className="mobile-menu-links" to="/about">
                {eng ? "Campaigns" : "ক্যাম্পেইন"}
                <hr className="mobile-link-hr" />
              </Link>

              <Link className="mobile-menu-links" to="/about">
                সার্ভিসেস
                <hr className="mobile-link-hr" />
              </Link>
              <Link className="mobile-menu-links" to="/about">
                বিজনেস
                <hr className="mobile-link-hr" />
              </Link>
              <Link className="mobile-menu-links" to="/about">
                হেল্প
                <hr className="mobile-link-hr" />
              </Link>
              <Link className="mobile-menu-links" to="/about">
                ক্যারিয়ার
                <hr className="mobile-link-hr" />
              </Link>
              <Link className="mobile-menu-links" to="/about">
                পরিচিতি
                <hr className="mobile-link-hr" />
              </Link>
              <Link className="mobile-menu-links" to="/about">
                ব্লগ
                <hr className="mobile-link-hr" />
              </Link>
            </div>
            <button className="bkash-btn-mobile-menu">
              {eng ? <span>bkash App</span> : <span>বিকাশ এ্যাপ</span>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
