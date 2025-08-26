import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollManager";

const SiteLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SiteLayout;
