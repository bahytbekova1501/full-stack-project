/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/rukovanew/rukovasman2.gltf -r public
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rukovasman2(props) {
  const { nodes, materials } = useGLTF("/rukovanew/rukovasman2.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.rukovasman2.geometry}
        material={materials["FABRIC_1_FRONT_2707.006"]}
        position={[0, -11, -0.08]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/rukovanew/rukovasman2.gltf");
