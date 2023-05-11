
import React, { useRef } from "react";
import { Html, Text, useGLTF, useScroll } from "@react-three/drei";
import { gsap } from "gsap";
export function Contact(props) {
  const email = useRef()
  const linked = useRef()
  const git = useRef()
  const { nodes, materials } = useGLTF("/contactButtons.glb");
  const handleEnter = (referenceB) => {
    gsap.to(referenceB.current.scale, { duration: 0.5, x: 1.04, y: 1.04, z: 1.04 });
  }
  const handleLeave = (referenceB) => {
    gsap.to(referenceB.current.scale, { duration: 0.5, x: 1, y: 1, z: 1 });
  }
  return (
    <group {...props} dispose={null}>
      <group 
      onClick={()=>{
        window.open(`mailto:ajemphilip@gmail.com`)
        props.sound()
      }}
      position={[13.825, 2.687, 10.297]}
      scale={[1,1.04,1.02]}
      ref={email}
      onPointerEnter={() => { handleEnter(email) }}
      onPointerLeave={() => { handleLeave(email) }}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={nodes.Plane016.material}
      >
        <meshStandardMaterial color={'grey'}></meshStandardMaterial>
      </mesh>
      <Text position={[0.001,0,-0.07]} rotation={[-Math.PI*0.5,Math.PI*0.5,0]} anchorX={"center"} anchorY={"center"} fontSize={'0.15'} lineHeight={1}  letterSpacing={0} textAlign="left" font={props.TekoBold} characters="featured" color={'black'}>
                    EMAIL
                </Text>
      </group>
      <group 
      ref={git}
      onPointerEnter={() => { handleEnter(git) }}
      onPointerLeave={() => { handleLeave(git) }}
      scale={[1,1.04,1.02]} 
      position={[13.82, 2.69, 11.307]}
      onClick={()=>{
       props.sound()
        window.open(`https://github.com/philipn1`)
       
        }}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={nodes.Plane015.material}
      >
        <meshStandardMaterial color={'grey'}></meshStandardMaterial>
      </mesh>
      <Text position={[0.001,0,-0.07]} rotation={[-Math.PI*0.5,Math.PI*0.5,0]} anchorX={"center"} anchorY={"center"} fontSize={'0.15'} lineHeight={1}  letterSpacing={0} textAlign="left" font={props.TekoBold} characters="featured" color={'black'}>
                    GITHUB
                </Text>
      </group>
      <group
      ref={linked}
      onPointerEnter={() => { handleEnter(linked) }}
      onPointerLeave={() => { handleLeave(linked) }}
      onClick={()=>{
        window.open(`https://www.linkedin.com/in/philip-m-b90a2523b/`)
        props.sound()
      }}
      position={[13.82, 2.693, 12.319]}
      scale={[1,1.04,1.02]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={nodes.Plane014.material}
        
      >
        <meshStandardMaterial color={'grey'}></meshStandardMaterial>
      </mesh>
      <Text position={[0.001,0,-0.07]} rotation={[-Math.PI*0.5,Math.PI*0.5,0]} anchorX={"center"} anchorY={"center"} fontSize={'0.15'} lineHeight={1}  letterSpacing={0} textAlign="left" font={props.TekoBold} characters="featured" color={'black'}>
                    LINKEDIN
                </Text>
      </group>
   
    </group>
  );
}

useGLTF.preload("/contactButtons.glb");
