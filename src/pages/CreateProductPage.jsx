// import React, { useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
// import Body3 from "../Body3";
// import { Body2 } from "../Body2";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Futbolka } from "../components/models/Futbolka";
import { BodyModel } from "../components/models/BodyModel";
import { Body } from "../Body";
import { Tolstovka } from "../components/models/Tolstovka";
import { Button } from "@mui/material";
import { useState } from "react";

function Controls() {
  const { camera, gl } = useThree();
  return <OrbitControls args={[camera, gl.domElement]} />;
}

// const components = [<Tolstovka />, <Futbolka />];

function CreateProductPage() {
  const [clothing, setClothing] = useState(null);
  // const [clothing, setClothing] = useState(false);
  const handleButtonClick = (clouth) => {
    setClothing(clouth);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "650px", height: "700px" }}>
        <Canvas
          // style={{ background: "black" }}
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
          {/* <Body2 /> */}
        </Canvas>
      </div>
      <div>
        <Button onClick={() => handleButtonClick(<Futbolka />)}>
          Футболка
        </Button>
        <Button onClick={() => handleButtonClick(<Tolstovka />)}>
          Толстовка
        </Button>
        <Button onClick={() => setClothing(null)}>Очистить все </Button>
        {/* {components.map(item)}
        <Button onClick={handleButtonClick}>
          {clothing ? "Hide Futbolka" : "Show Futbolka"}
        </Button> */}
        {/* <Button onClick={() => setClothing(false)}>BodyModel</Button>
        <Button onClick={() => setClothing(true)}>Futbolka</Button>
        <Button onClick={() => setClothing(true)}>Tolstovka</Button> */}
      </div>
    </div>
  );
}

export default CreateProductPage;
