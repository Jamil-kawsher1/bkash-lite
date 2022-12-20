import React from "react";
import BusinessHome from "../Components/BusinessHome";
import Experince from "../Components/Experince";
import HomeMainBanner from "../Components/HomeMainBanner";
import Mockup from "../Components/Mockup";
import NearestPoints from "../Components/NearestPoints";
import Slider from "../Components/Slider";
import WhatsNew from "../Components/WhatsNew";

const Home = () => {
  return (
    <>
      <Slider />
      <Mockup />
      <HomeMainBanner />
      <BusinessHome />
      <WhatsNew />
      <NearestPoints />
      <Experince />
    </>
  );
};

export default Home;
