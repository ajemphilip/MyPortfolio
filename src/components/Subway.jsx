
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useState } from "react";

export function Subway(props) {
  const { nodes, materials } = useGLTF("/subway.glb");
  const subwayTrain = useRef();
  const [subwayTriger, setSubwayTriger] = useState(true)

  useEffect(() => {
    let interval = null;
    if (subwayTriger) {
      gsap.to(
        subwayTrain.current.position,
        { duration: 5, x: 30, ease: "Power2.easeOut" })
      setTimeout(() => {
        console.log("second anim");
        gsap.to(
          subwayTrain.current.position,
          { duration: 5, x: -70, ease: "Power2.easeIn" })
      }, 9000)
      setTimeout(() => {
        subwayTrain.current.position.x = 60;
        setSubwayTriger(false)
      }, 21000)
    }
    else {
      interval = setInterval(() => {
        gsap.to(
          subwayTrain.current.position,
          { duration: 5, x: 30, ease: "Power2.easeOut" })
        setTimeout(() => {
          console.log("second anim asda");
          gsap.to(
            subwayTrain.current.position,
            { duration: 5, x: -70, ease: "Power2.easeIn" })
        }, 9000)
        setTimeout(() => {
          subwayTrain.current.position.x = 60;
        }, 21000)
      }, 30000);
    }
    return () => clearInterval(interval);
  }, [subwayTriger])

  return (
    <group
      ref={subwayTrain}
      position={[60, 1.68, -8.2]}
      scale={[1, 1.2, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={nodes.Cube062.material}
      >
        <meshStandardMaterial color={'#141414'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062_1.geometry}
        material={nodes.Cube062_1.material}
      >
        <meshStandardMaterial color={'black'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062_2.geometry}
        material={nodes.Cube062_2.material}
      >
        <meshStandardMaterial emissive={'white'} emissiveIntensity={10} color={'white'}></meshStandardMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/subway.glb");
