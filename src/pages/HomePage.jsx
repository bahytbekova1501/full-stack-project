import React from "react";
import "../style/App.css";
// import "../index.css";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer1";
import Home from "../components/Home";
import Milestones from "../components/Milestones";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
// import Services from "./components/Services";
import { motion } from "framer-motion";

import MainRoutes from "../routes/MainRoutes";
function HomePage() {
  return (
    <motion.div initial="hidden" animate="show">
      <main className="main">
        <div className="container">
          <h1 className="main__title">Welcome to Our Website</h1>
        </div>
      </main>
      <Footer />
      <Services />
      {/* <Portfolio /> */}
      <Milestones />
      <Blog />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />

      <ScrollToTop />
    </motion.div>
  );
}

export default HomePage;
