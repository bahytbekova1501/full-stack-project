import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three-obj-loader";
import AddProductPage from "./pages/CreateProductPage";

const Body3 = () => {
  const mount = useRef(<AddProductPage />);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const objLoader = new OBJLoader();
    objLoader.load("/public/mpdel3/model.obj", (object) => {
      // объект загружен успешно
      // добавляем его на сцену
      scene.add(object);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={mount} />;
};

export default Body3;
