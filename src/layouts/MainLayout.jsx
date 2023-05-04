import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer1";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
