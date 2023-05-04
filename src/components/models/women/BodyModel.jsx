/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/modelBody/Body.gltf -r public
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BodyModel(props) {
  const { nodes, materials } = useGLTF("/modelBody/Body.gltf");

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, -11, -0.08]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}>
        <mesh
          geometry={nodes["avatar-women001"].geometry}
          material={materials["dummySG1SG1.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_1"].geometry}
          material={materials["W_Shoes_skinSG1SG1SG1.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_2"].geometry}
          material={materials["HEELSG1SG1.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_3"].geometry}
          material={materials["hair2.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_4"].geometry}
          material={materials["Mara:face2.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_5"].geometry}
          material={materials["Mara:body3.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_6"].geometry}
          material={materials["Mara:arm2.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_7"].geometry}
          material={materials["Mara:leg2.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_8"].geometry}
          material={materials["Mara:eye2.001"]}
        />
        <mesh
          geometry={nodes["avatar-women001_9"].geometry}
          material={
            materials[
              "Mara:skin_14:skin_13:skin_11:skin_10:pose:pose:eyelash1.001"
            ]
          }
        />
        <mesh
          geometry={nodes["avatar-women001_10"].geometry}
          material={materials["Mara:tooth2.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/modelBody/Body.gltf");
