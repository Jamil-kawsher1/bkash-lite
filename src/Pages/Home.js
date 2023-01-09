import React, { useContext, useEffect } from "react";
import BusinessHome from "../Components/BusinessHome";
import Experince from "../Components/Experince";
import HomeMainBanner from "../Components/HomeMainBanner";
import Mockup from "../Components/Mockup";
import NearestPoints from "../Components/NearestPoints";
import Slider from "../Components/Slider";
import WhatsNew from "../Components/WhatsNew";
import { LanguageContext } from "../Context/languageContext";

const Home = () => {
  // useEffect(() => {
  //   fetch("service.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  const [serviceinfo] = useContext(LanguageContext);
  console.log(serviceinfo);
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
