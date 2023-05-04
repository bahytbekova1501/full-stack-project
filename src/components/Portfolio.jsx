// // import React from "react";
// // import styled from "styled-components";
// // import { motion } from "framer-motion";
// // import { useScroll } from "./useScroll";
// // import { portfolioAnimations } from "../animation";

// // function Portfolio() {
// //   const [element, controls] = useScroll();
// //   return (
// //     <Section id="portfolio" ref={element}>
// //       <div className="portfolio-more">{/* <span>CUSTOM</span> */}</div>
// //     </Section>
// //   );
// // }

// // const Section = styled.section`
// // min-height: 100vh;
// // padding-bottom: 2rem;
// // background-color: var(--secondary-color);
// // .grid {
// //   display: grid;
// //   grid-template-columns: repeat(4, 1fr);
// //   grid-template-areas:
// //   "one one two two"
// //   "one one three four"
// //   "five six seven seven"
// //   "eight six seven seven";
// //   .grid-box {
// //     height: 15rem;
// //     width: 100%;
// //     cursor: pointer;
// //     &:nth-of-type(1) {

// // .portfolio-more {
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   gap: 1rem;
// //   margin: 4rem 0;
// //   span {
// //     color: #fff;
// //     letter-spacing: 0.1rem;
// //     text-transform: uppercase;
// //   }
// // }
// // @media screen and (min-width: 280px) and (max-width: 1080px) {
// //   .grid {
// //     padding: 0;
// //     grid-template-columns: 1fr;
// //     grid-template-areas:
// //     "one"
// //     "two"
// //     "three"
// //     "four"
// //     "five"
// //     "six"
// //     "seven"
// //     "eight";
// //     .grid-box {
// //       height: 25rem !important;
// //     }
// //   }
// // }
// // `;

// // export default Portfolio;
// import React from "react";
// import styled from "styled-components";
// import play from "../assets/play.png";
// import home from "../assets/home.png.jpg";
// import Title from "./Title";
// import { motion } from "framer-motion";
// import { useScroll } from "./useScroll";
// import { blogsAnimation } from "../animation";
// import "../Home.css";

// function Blog() {
//   const [element, controls] = useScroll();

//   return (
//     <Section id="blog" ref={element}>
//       <Title value="Custom" />
//       <div className="blogs">
//         {/* {blogsData.map(({ title, type, description }) => {
//           return (
//             <motion.div
//               className="blog"
//               variants={blogsAnimation}
//               animate={controls}
//               transition={{
//                 delay: 0.03,
//                 type: "tween",
//                 duration: 0.8,
//               }}>
//               <div className="image"></div>
//               <div className="title">
//                 <h3>{title}</h3>
//               </div>
//               <span className="type">{type}</span>
//               <div className="description">
//                 <p>{description}</p>
//               </div>
//               <div className="more">
//                 <img src={play} alt="Play" />
//                 <span>Читать дальше </span>
//               </div>
//             </motion.div>
//           );
//         })} */}
//       </div>
//     </Section>
//   );
// }

// // Стилевые компоненты
// const Section = styled.section`
//   min-height: 100vh;
//   position: relative;

//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     margin: 2rem 0;
//     .blogs {
//       padding: 0 2rem;
//       grid-template-columns: 1fr;
//       margin: 0 1rem;
//     }
//   }
// `;

// export default Blog;
