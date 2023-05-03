import React from "react";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import Experience from "./components/Experience";
// import Configurator from "./components/Configurator";
// import { CustomizationProvider } from "./contexts/Customization";
// import { Body } from "../Body";
// import { OBJLoader } from "three-obj-loader";
// import { Body4 } from "../Body4";
// import { Body } from "../Body";
// import { ModelBody2 } from "../ModelBody2";
// import { ModelBody3 } from "../ModelBody3";
// import { ModelBody } from "../ModelBody";
import { Futbolka } from "../components/models/Futbolka";
function Controls() {
  const { camera, gl } = useThree();
  return <OrbitControls args={[camera, gl.domElement]} />;
}
// const body = { Body };
// console.log(body);

function CreatePage() {
  return (
    <div>
      <div style={{ width: "600px", height: "750px", position: "relative" }}>
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fav: 70, position: [0, 0.1, 15] }}>
          <ambientLight />
          <pointLight position={[2, 1, 4]} intensity={1} />
          <pointLight position={[-3, -3, -2]} />
          <Controls />
          {/* <Body4 /> */}
          {/* <Body /> */}
          {/* <ModelBody /> */}
          <Futbolka />
          {/* <Body2 /> */}
          {/* <ModelBody2 /> */}
          {/* <ModelBody3 /> */}
        </Canvas>
      </div>
    </div>
    // <CustomizationProvider>
    //   <div className="App">
    //     <Canvas dpr={[1, 2]}>
    //       <color attach="background" args={["#213547"]} />
    //       <fog attach="fog" args={["#213547", 10, 20]} />
    //       <Experience />
    //     </Canvas>
    //     <Configurator />
    //   </div>
    // </CustomizationProvider>
  );
}

export default CreatePage;
