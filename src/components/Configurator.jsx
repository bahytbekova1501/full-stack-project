// import { useCustomization } from "../contexts/Customization";

import { Html } from "@react-three/drei";
import { useCustomization } from "../context/Customization";
import "../components/Configurator.css";
const Configurator = () => {
  const { material, setMaterial, clothesColors, clotheColor, setClotheColor } =
    useCustomization();
  return (
    // <Html>
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Clothe material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}>
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}>
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Clothe color</div>
        <div className="configurator__section__values">
          {clothesColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === clotheColor.color ? "item--active" : ""
              }`}
              onClick={() => setClotheColor(item)}>
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </Html>
  );
};

export default Configurator;
