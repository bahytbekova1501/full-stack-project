import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
// import Navbar from "../components/navbar";
// import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Footer />
      <Outlet />
    </>
  );
}

export default MainLayout;
