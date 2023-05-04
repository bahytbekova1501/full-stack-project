import { Canvas, useThree } from "@react-three/fiber";

import Configurator from "../components/Configurator";
import { CustomizationProvider } from "../context/Customization";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Hoodie } from "../components/models/Hoodie";
import { Yellow } from "components/models/Yellow";

function Controls() {
  const { camera, gl } = useThree();
  return <OrbitControls args={[camera, gl.domElement]} />;
}
function CustomYellow() {
  const [clothing, setClothing] = useState(null);
  // const [clothing, setClothing] = useState(false);
  //   const handleButtonClick = (clouth) => {
  //     setClothing(clouth);
  //   };
  return (
    <CustomizationProvider>
      <div
        className="App"
        style={{ width: "500px", height: "700px", backgroundColor: "grey" }}>
        <Canvas
          //   style={{ background: "black", width: "300px" }}
          dpr={[1, 2]}
          shadows
          camera={{ fav: 45, position: [0, 0.1, 15] }}>
          {/* <MyCamera /> */}
          <ambientLight />
          <pointLight position={[2, 1, 2]} intensity={1} />
          <pointLight position={[-3, -3, -2]} />
          <Controls />
          {/* <Body /> */}
          {/* <Body2 /> */}
          {/* {clothing} */}
          {/* {clothing && <Futbolka />} */}
          {/* {clothing ? <Futbolka /> : <BodyModel />} */}
          {/* {clothing ? <Tolstovka /> : <BodyModel />} */}
          <Yellow />
          {/* <Configurator /> */}
          {/* <Body2 /> */}
        </Canvas>

        <Configurator />
      </div>{" "}
    </CustomizationProvider>
  );
}

export default CustomYellow;
