// import { Button } from "@mui/material";
// import {
//   Backdrop,
//   BakeShadows,
//   Float,
//   MeshReflectorMaterial,
//   OrbitControls,
//   PresentationControls,
//   Stage,
//   useGLTF,
// } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { BodyModel } from "./models/BodyModel";
// import { useState } from "react";
// import { Futbolka } from "./models/Futbolka";
// import { Tolstovka } from "./models/Tolstovka";
// function Controls() {
//   const { camera, gl } = useThree();
//   return <OrbitControls args={[camera, gl.domElement]} />;
// }
// const Experience = () => {
//   const [clothing, setClothing] = useState(null);

//   const handleButtonClick = (clouth) => {
//     setClothing(clouth);
//   };
//   return (
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       <div style={{ width: "650px", height: "700px" }}>
//         <Canvas
//           // style={{ background: "black" }}
//           dpr={[1, 2]}
//           shadows
//           camera={{ fav: 45, position: [0, 0.1, 15] }}>
//           {/* <MyCamera /> */}
//           <ambientLight />
//           <pointLight position={[2, 1, 2]} intensity={1} />
//           <pointLight position={[-3, -3, -2]} />
//           <Controls />
//           {/* <Body /> */}
//           {/* <Body2 /> */}
//           {clothing}
//           {/* {clothing && <Futbolka />} */}
//           {/* {clothing ? <Futbolka /> : <BodyModel />} */}
//           {/* {clothing ? <Tolstovka /> : <BodyModel />} */}
//           <BodyModel />
//           {/* <Body2 /> */}
//         </Canvas>
//       </div>
//       {/* <div>
//         <Button onClick={() => handleButtonClick(<Futbolka />)}>
//           Футболка
//         </Button>
//         <Button onClick={() => handleButtonClick(<Tolstovka />)}>
//           Толстовка
//         </Button>
//         <Button onClick={() => setClothing(null)}>Очистить все </Button>
//       </div> */}
//     </div>
//   );
// };

// export default Experience;
