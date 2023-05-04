// import React, { useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";
// import Body3 from "../Body3";
// import { Body2 } from "../Body2";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Futbolka } from "../components/models/women/Futbolka";
import { BodyModel } from "../components/models/women/BodyModel";
import { Tolstovka } from "../components/models/women/Tolstovka";
import { Button } from "@mui/material";
import { useState } from "react";
import { Shtany } from "../components/models/women/Shtany";
import { Maika1 } from "../components/models/women/Maika1";
import { Rukovasman2 } from "../components/models/women/Rukovasman2";
import { Rukovakorotkienew } from "../components/models/women/Rukovakorotkienew";
import { Rukovabezmanjet } from "../components/models/women/Rukovabezmanjet";
import { MenModel } from "../components/models/men/MenModel";
import Configurator from "./Configurator";
import { CustomizationProvider } from "context/Customization";

function Controls() {
  const { camera, gl } = useThree();
  return <OrbitControls args={[camera, gl.domElement]} />;
}

function Models3D() {
  const [gender, setGender] = useState(null);
  const [selected, setSelected] = useState(null);
  const [clothing, setClothing] = useState(null);
  const [rukova, setRukova] = useState(null);
  const [chest, setChest] = useState(null);
  const [bottomPart, setBottomPart] = useState(null);
  // const [clothing, setClothing] = useState(false);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };
  // Обработчик для выбора одежды
  const handleButtonClick = (clothing) => {
    setSelected("clothing");
    setClothing(clothing);
    setRukova(null);
    setChest(null);
    setBottomPart(null);
  };

  // Обработчик для выбора рукава
  const handleRukova = (rukova) => {
    setSelected("rukova");
    setClothing(null);
    setRukova(rukova);
    setChest(chest);
    setBottomPart(null);
  };

  // Обработчик для выбора верхней части одежды
  const handleChest = (chest) => {
    setSelected("chest");
    setClothing(null);
    setRukova(rukova);
    setChest(chest);
    setBottomPart(null);
  };

  // Обработчик для выбора нижней части одежды
  const handleBottomPart = (bottomPart) => {
    setSelected("bottomPart");
    setClothing(null);
    setRukova(null);
    setChest(null);
    setBottomPart(bottomPart);
  };

  // const handleButtonClick = (clouth) => {
  //   setClothing(clouth);
  // };
  // const handleRukova = (rukav) => {
  //   setRukova(rukav);
  // };
  // const handleChest = (chestClouth) => {
  //   setChest(chestClouth);
  // };
  // const handleBottomPart = (bottomPartClouth) => {
  //   setBottomPart(bottomPartClouth);
  // };

  // function hendle
  return (
    <CustomizationProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "100px",
        }}
      >
        <div style={{ width: "650px", height: "700px" }}>
          <Canvas
            dpr={[1, 2]}
            shadows
            camera={{ fav: 45, position: [0, 0.1, 15] }}
          >
            <ambientLight />
            <pointLight position={[2, 1, 2]} intensity={1} />
            <pointLight position={[-3, -3, -2]} />
            <Controls />

            {chest}
            {rukova}
            {clothing}
            {bottomPart}

            {gender}
          </Canvas>
          <Configurator />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Выберите пол</div>
          <Button onClick={() => handleGenderSelect(<BodyModel />)}>
            Женщина
          </Button>
          <Button onClick={() => handleGenderSelect(<MenModel />)}>
            Мужчина{" "}
          </Button>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>Верхняя часть</div>
          <div className="top">
            <Button onClick={() => handleButtonClick(<Futbolka />)}>
              Футболка
            </Button>
            <Button onClick={() => handleButtonClick(<Tolstovka />)}>
              Толстовка
            </Button>
          </div>
          <div className="top-create">
            <div className="top-create-chest">
              <Button onClick={() => handleChest(<Maika1 />)}>maika1</Button>
            </div>
            <div className="top-create-rukova">
              <Button onClick={() => handleRukova(<Rukovakorotkienew />)}>
                короткие
              </Button>
              <Button onClick={() => handleRukova(<Rukovabezmanjet />)}>
                рукова черные
              </Button>
              <Button onClick={() => handleRukova(<Rukovasman2 />)}>
                рукава черные с манжетом
              </Button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Button onClick={() => handleBottomPart(<Shtany />)}>shtany</Button>
        </div>
        <div>
          <Configurator />
        </div>
      </div>
    </CustomizationProvider>
  );
}

export default Models3D;
