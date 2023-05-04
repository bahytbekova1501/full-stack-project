import { Canvas, useThree } from "@react-three/fiber";
import Experience from "../components/Experience";
// import Experience from "./components/Experience";
import Configurator from "../components/Configurator";
import { CustomizationProvider } from "../context/Customization";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { BodyModel } from "../components/models/BodyModel";
import { Button } from "@mui/material";
import { Futbolka } from "../components/models/Futbolka";
import { Tolstovka } from "../components/models/Tolstovka";
function Controls() {
  const { camera, gl } = useThree();
  return <OrbitControls args={[camera, gl.domElement]} />;
}
function CustomPage() {
  const [clothing, setClothing] = useState(null);
  // const [clothing, setClothing] = useState(false);
  const handleButtonClick = (clouth) => {
    setClothing(clouth);
  };
  return (
    <CustomizationProvider>
      <div style={{ width: "1200px", height: "700px" }} className="App">
        <Canvas
          //   style={{ background: "black", width: "300px" }}
          style={{ width: "500px", height: "700px", backgroundColor: "grey" }}
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
          {clothing}
          {/* {clothing && <Futbolka />} */}
          {/* {clothing ? <Futbolka /> : <BodyModel />} */}
          {/* {clothing ? <Tolstovka /> : <BodyModel />} */}
          <BodyModel />
          {/* <Configurator /> */}
          {/* <Body2 /> */}
        </Canvas>

        <Configurator />
      </div>{" "}
      <div
        style={{
          // display: "flex",
          flexDirection: "row",
          marginLeft: "670px",
          //   marginTop: "-600px",
          //   marginBottom: "200px",
        }}>
        <Button onClick={() => handleButtonClick(<Futbolka />)}>
          Футболка
        </Button>
        <Button onClick={() => handleButtonClick(<Tolstovka />)}>
          Толстовка
        </Button>
        <Button onClick={() => setClothing(null)}>Очистить все </Button>
        {/* <Configurator /> */}
      </div>
    </CustomizationProvider>
  );
}

export default CustomPage;
