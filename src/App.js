import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer1";
import Home from "./components/Home";
import Milestones from "./components/Milestones";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
// import Services from "./components/Services";
import { motion } from "framer-motion";
import React from "react";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <MainRoutes />
      {/* <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop /> */}
    </motion.div>
  );
}

export default App;

export default App;
