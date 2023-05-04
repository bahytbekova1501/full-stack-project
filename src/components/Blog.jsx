import React from "react";
import styled from "styled-components";
import play from "../assets/play.png";
import home from "../assets/home.png.jpg";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "../animation";
import "../Home.css";

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "Tile1",
      type: "SubTile",
      description:
        "Предлагайте свои дизайны на заказ, чтобы они соответствовали уникальным телам и вкусам ваших клиентов.",
    },
    {
      title: "Title2",
      type: "SubTile",
      description:
        "Предлагайте свои дизайны на заказ, чтобы они соответствовали уникальным телам и вкусам ваших клиентов.",
    },
    {
      title: "Title3",
      type: "SubTitle",
      description:
        "Предлагайте свои дизайны на заказ, чтобы они соответствовали уникальным телам и вкусам ваших клиентов..",
    },
  ];
  return (
    <Section id="blog" ref={element}>
      <Title value="Blog" />
      <div className="blogs">
        {blogsData.map(({ title, type, description }) => {
          return (
            <motion.div
              className="blog"
              variants={blogsAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}>
              <div className="image"></div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="more">
                <img src={play} alt="Play" />
                <span>Читать дальше </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

// Стилевые компоненты
const Section = styled.section`
  min-height: 100vh;
  position: relative;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

export default Blog;
