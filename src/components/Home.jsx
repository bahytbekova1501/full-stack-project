import React from 'react';
import styled from "styled-components";
// import home from '../assets/home.png.jpg'
import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>3D Вселенная</h1>
          </div>  
          <div className="subTitle">
            <p>
            Соединение моды и интеллекта: Откройте для себя самое умное 3D-программное обеспечение для дизайна моды в мире
            </p>  
          </div>
          <img src={play} alt="Play Button" />
        </div>  
      </motion.div>

      <motion.div className="info"
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
          <div className="grid">
            <div className="col">
                <strong>3D Вселенная</strong>
                <p>Lorem, ipsum.</p>
            </div>
            <div className="col">
                <strong>Email</strong>
                <p>users@gmail.com</p>
            </div> 
            <div className="col">
                <strong>Mobile</strong>
                <p>+996 707 17 76 79</p>
            </div> 
            <div className="col">
                <strong>Address</strong>
                <p>Бишкек</p>
                <p>Табышалиева 29</p>
            </div> 
            <div className="col">
                <strong>HZ</strong>
                <p>blabla</p>
                <p>blabl</p>
            </div> 
            <div className="col">
                <strong>Working Hours</strong>
                <p>Понедельник & Пятница</p>
                <p>10:00 до 21:00</p>
            </div>   
          </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`

`;

export default Home