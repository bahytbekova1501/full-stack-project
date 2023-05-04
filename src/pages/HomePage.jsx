import React from "react";

import Blog from "components/Blog";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Home from "components/Home";
import Milestones from "components/Milestones";
import Portfolio from "components/Portfolio";
import Pricing from "components/Pricing";
import ScrollToTop from "components/ScrollToTop";
import Services from "components/Services";
import Skills from "components/Skills";
import Testimonials from "components/Testimonials";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="main__title">Welcome to Our Website</h1>
        <motion.div initial="hidden" animate="show">
          <Home />
          <Services />
          <Portfolio />
          <Milestones />
          <Blog />
          <Pricing />
          <Testimonials />
          <Skills />
          <Contact />
          <Footer />
          <ScrollToTop />
        </motion.div>
      </div>
    </main>
  );
}

export default HomePage;
