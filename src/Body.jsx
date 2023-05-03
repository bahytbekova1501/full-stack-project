import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Body(props) {
  console.log(props);
  const { nodes, materials } = useGLTF("/model/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Cloth_Cloth_0.geometry}
          material={materials.Cloth}
          position={[0, -150, 0]}
        />
        <mesh
          geometry={nodes.ChestArmor_ChestArmor_0.geometry}
          material={materials.ChestArmor}
          position={[0, -150, 0]}
        />
        <mesh
          geometry={nodes.ChestParts_ChestParts_0.geometry}
          material={materials.ChestParts}
          position={[0, -150, 0]}
        />
        <mesh
          geometry={nodes.ArmArmor_ArmArmor_0.geometry}
          material={materials.ArmArmor}
          position={[0, -150, 0]}
        />
        {/* <mesh
          geometry={nodes.Cloak_Cloak_0.geometry}
          material={materials.Cloak}
          position={[0, -2.84, 0]}
        /> */}
        {/* <mesh
          geometry={nodes.LegArmor_LegArmor_0.geometry}
          material={materials.LegArmor}
          position={[0, -2.84, 0]}
        /> */}
      </group>
    </group>
  );
}

useGLTF.preload("/model/scene.gltf");
