import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import {
  CustomizationProvider,
  useCustomization,
} from "../../context/Customization";
import Configurator from "../Configurator";

export function Futbolka(props) {
  const { nodes, materials } = useGLTF("/futbolka/futbolkagltf.gltf");
  const { material, clotheColor } = useCustomization();
  const leatherTextureProps = useTexture({
    // map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    // roughnessMap: "/public/textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  // const fabric2TextureProps = useTexture({
  //   // map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
  //   normalMap: "./textures/fabric2/Subctane_Graph_normal.jpg",
  //   // normalMap: "."
  //   roughnessMap: "./textures/fabric2/Subctane_Graph_roughness.jpg",
  //   aoMap: "./textures/fabric2/Subctane_Graph_ambientOcclusion.jpg",
  // });

  // leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);
  // leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT =
  //   THREE.MirroredRepeatWrapping;
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  // // fabricTextureProps.map.repeat.set(3, 3);
  // fabric2TextureProps.normalMap.repeat.set(3, 3);
  // fabric2TextureProps.roughnessMap.repeat.set(3, 3);
  // fabric2TextureProps.aoMap.repeat.set(3, 3);
  // // fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
  // //   THREE.RepeatWrapping;
  // fabric2TextureProps.normalMap.wrapS = fabric2TextureProps.normalMap.wrapT =
  //   THREE.RepeatWrapping;
  // fabric2TextureProps.roughnessMap.wrapS =
  //   fabric2TextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  // fabric2TextureProps.aoMap.wrapS = fabric2TextureProps.aoMap.wrapT =
  //   THREE.RepeatWrapping;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.qwerty.geometry}
        material={materials.Silk_Duchess_Satin_FRONT_35292}
        position={[0, -11, -0.08]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}>
        <meshStandardMaterial
          {...(material === "leather" ? leatherTextureProps : null)}
          color={clotheColor.color}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/futbolka/futbolkagltf.gltf");
