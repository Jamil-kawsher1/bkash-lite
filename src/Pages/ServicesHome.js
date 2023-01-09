import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Services from "../Components/Services";

const ServicesHome = () => {
  return (
    <div className="common-container-gap">
      <div className="container ">
        {" "}
        <Services />
      </div>
      <Outlet />
    </div>
  );
};

export default ServicesHome;
