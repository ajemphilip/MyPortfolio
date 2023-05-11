import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

export function Buttons(props) {
  const { nodes, materials } = useGLTF("/buttons.glb");

  const texture = props.texture;

  const skillsButton = useRef()
  const workButton = useRef()
  const scrollText = useRef()
  const handleEnter = (referenceB) => {
    gsap.to(referenceB.current.scale, { duration: 0.5, x: 1.05, y: 1.05, z: 1.05 });
  }

  const handleLeave = (referenceB, referenceT) => {
    gsap.to(referenceB.current.scale, { duration: 0.5, x: 1, y: 1, z: 1 });
  }

  useFrame((state) => {
    scrollText.current.position.z = -2.79 + Math.sin(state.clock.elapsedTime) * 0.15
  })
  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.37, 0.24, -2.74]}
        scale={[0.6, 0.23, 0.23]}
        onClick={props.handleSkills}
        onPointerEnter={() => { handleEnter(skillsButton) }}
        onPointerLeave={() => { handleLeave(skillsButton) }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={nodes.Cube016_1.material}
          ref={skillsButton}
        >
          <meshStandardMaterial {...texture}></meshStandardMaterial>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          scale={0.9}
          geometry={nodes.Cube016_2.geometry}
          material={nodes.Cube016_2.material}
        >
          <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
        </mesh>
      </group>
      <group
        onPointerEnter={() => { handleEnter(workButton) }}
        onPointerLeave={() => { handleLeave(workButton) }}
        position={[-2.82, 0.24, -2.75]}
        scale={[0.6, 0.23, 0.23]}
        onClick={props.handleFeatured}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={nodes.Cube_1.material}
          ref={workButton}
        >
          <meshStandardMaterial {...texture}></meshStandardMaterial>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          scale={0.9}
          geometry={nodes.Cube_2.geometry}
          material={nodes.Cube_2.material}
        >
          <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text013.geometry}
        ref={scrollText}
        material={nodes.Text013.material}
        position={[-2.07, 0.24, -2.79]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.26}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/buttons.glb");