import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function Platform(props) {
  const { nodes } = useGLTF("/subway-new-joined-final.glb");
  const chair = useRef();
  const cylinder01 = useRef();
  const cylinder02 = useRef();
  const cylinder03 = useRef();
  const homeButton = useRef();
  const featuredProjects = useRef();
  const webProjects = useRef();
  const artProjects = useRef();
  const education = useRef();
  const aboutMe = useRef();
  const skills = useRef();
  const contact = useRef();
  const homeText = useRef();
  const featuredText = useRef();
  const webText = useRef();
  const artText = useRef();
  const educationText = useRef();
  const aboutText = useRef();
  const skillsText = useRef();
  const contactText = useRef();
  const scrollVal = props.scrollVal
  const texture = props.texture


  useFrame((state) => {
    chair.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 2
    cylinder03.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 2
    cylinder03.current.position.z = -3 + Math.sin(-state.clock.elapsedTime * 0.3) * 2
    cylinder01.current.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 6
    cylinder02.current.position.z = -2.7 + Math.sin(state.clock.elapsedTime * 0.1) * 2
  })

  const handleHome = () => {
    props.sound()
    gsap.to(props.cameraRef.current.position, {
      duration: 1,
      x: -3.95,
      y: 6,
      z: -2
    })
    gsap.to(props.cameraRef.current.rotation, {
      duration: 1,
      x: -0.95,
      y: -0.3,
      z: 0
    })
    setTimeout(() => {
      props.buttonController()
      scrollVal.el.scrollTop = (6 * window.innerHeight) * 0
      scrollVal.offset = 0
    }, 1500)
  }
  const handleFeatured = () => {
    props.sound()
    gsap.to(props.cameraRef.current.position, {
      duration: 1,
      x: 19,
      y: 2.45,
      z: -1.482154
    })
    gsap.to(props.cameraRef.current.rotation, {
      duration: 1,
      x: 0,
      y: -1.3,
      z: 0
    })
    setTimeout(() => {
      props.buttonController()
      scrollVal.el.scrollTop = (6 * window.innerHeight) * 0.23045023696682465
      scrollVal.offset = 0.23045023696682465
    }, 1500)
  }
  const handleWeb = () => {
    props.sound()
    gsap.to(props.cameraRef.current.position, {
      duration: 1,
      x: 19,
      y: 2.45,
      z: 1.197529
    })
    gsap.to(props.cameraRef.current.rotation, {
      duration: 1,
      x: 0,
      y: -1.3,
      z: 0
    })
    setTimeout(() => {
      props.buttonController()
      scrollVal.el.scrollTop = (6 * window.innerHeight) * 0.3076619273301738
      scrollVal.offset = 0.3076619273301738
    }, 1500)
  }
  const handleArt = () => {
    props.sound()
    gsap.to(props.cameraRef.current.position, {
      duration: 1,
      x: 19,
      y: 2.45,
      z: 3.885609
    })
    gsap.to(props.cameraRef.current.rotation, {
      duration: 1,
      x: 0,
      y: -1.3,
      z: 0
    })
    setTimeout(() => {
      props.buttonController()
      scrollVal.el.scrollTop = (6 * window.innerHeight) * 0.3842812006319115
      scrollVal.offset = 0.3842812006319115
    }, 1500)
  }
  const handleSkills = () => {
    props.sound()
    gsap.to(props.cameraRef.current.position, {
      duration: 1,
      x: 7.856549,
      y: 2.032412,
      z: 0.122548
    })
    gsap.to(props.cameraRef.current.rotation, {
      duration: 1,
      x: 0,
      y: -3.100225,
      z: 0
    })
    setTimeout(() => {
      props.buttonController()
      scrollVal.el.scrollTop = (6 * window.innerHeight) * 0.6140252976190477
      scrollVal.offset = 0.6140252976190477
    }, 1500)
  }
  const handleEducation = () => {
    props.sound()
    gsap.to(props.cameraRef.current.position, {
      duration: 1,
      x: 0.137117,
      y: 3.747307,
      z: 6.552402
    })
    gsap.to(props.cameraRef.current.rotation, {
      duration: 1,
      x: 0,
      y: -4.320217,
      z: 0
    })
    setTimeout(() => {
      props.buttonController()
      scrollVal.el.scrollTop = (6 * window.innerHeight) * 0.7140997023809523
      scrollVal.offset = 0.7140997023809523
    }, 1500)
  }
  const handleAbout = () => {
    props.sound()
    gsap.to(props.cameraRef.current.position, {
      duration: 1,
      x: 13.000303,
      y: 2.599992,
      z: 5.459926
    })
    gsap.to(props.cameraRef.current.rotation, {
      duration: 1,
      x: 0,
      y: -3.82,
      z: 0
    })
    setTimeout(() => {
      props.buttonController()
      scrollVal.el.scrollTop = (6 * window.innerHeight) * 0.5373674683216964
      scrollVal.offset = 0.5373674683216964
    }, 1500)
  }
  const handleContact = () => {
    props.sound()
    gsap.to(props.cameraRef.current.position, {
      duration: 1,
      x: 16.7,
      y: 2.65,
      z: 11.05
    })
    gsap.to(props.cameraRef.current.rotation, {
      duration: 1,
      x: -1.570796,
      y: -4.703,
      z: 0
    })
    setTimeout(() => {
      props.buttonController()
      scrollVal.el.scrollTop = (6 * window.innerHeight) * 1
      scrollVal.offset = 1
    }, 1500)
  }


  const handleEnter = (referenceB, referenceT) => {
    gsap.to(referenceB.current.scale, { duration: 0.5, x: 1.04, y: 1.04, z: 1.04 });
    gsap.to(referenceT.current.scale, { duration: 1, x: 1.1, y: 1.1, z: 1.1 });

  }
  const handleLeave = (referenceB, referenceT) => {
    gsap.to(referenceB.current.scale, { duration: 0.5, x: 1, y: 1, z: 1 });
    gsap.to(referenceT.current.scale, { duration: 1, x: 1, y: 1, z: 1 });
  }

  return (

    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text007.geometry}
        material={nodes.Text007.material}
        position={[-0.766, 2.073, 12.05]}
        rotation={[1.65, -0.3, -3.02]}
        scale={0.68}
      >
        <meshStandardMaterial emissiveIntensity={12} emissive={'#0009FF'} color={'#E7E7E7'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text011.geometry}
        material={nodes.Text011.material}
        position={[18.3403, 2.615, 2.22]}
        rotation={[1.65, -0.3, -3.02]}
        scale={0.68}
      >
        <meshStandardMaterial emissiveIntensity={0.4} emissive={'#E7E7E7'} color={'#E7E7E7'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={nodes.Text001.material}
        position={[8.3, 4.65, -5.94]}
        rotation={[1.65, -0.3, -3.02]}
        scale={0.68}
      >
        <meshBasicMaterial color={'#0e1111'}></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={nodes.Text003.material}
        position={[17.45, 4.63, 3.52]}
        rotation={[1.65, -0.3, -3.02]}
        scale={0.68}
      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={nodes.Text002.material}
        position={[9.9, 6.2, 3.14]}
        rotation={[1.65, -0.3, -3.02]}
        scale={0.68}
      >
        <meshStandardMaterial color={'#FFDB6F'} emissive={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={aboutMe}
        onClick={handleAbout}
        onPointerEnter={() => { handleEnter(aboutMe, aboutText) }}
        onPointerLeave={() => { handleLeave(aboutMe, aboutText) }}
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[8.31, 3.4, -5.92]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <group scale={0.2} position={[10.01, 4, -5.92]}>
        <mesh
          ref={skills}
          onClick={handleSkills}
          onPointerEnter={() => { handleEnter(skills, skillsText) }}
          onPointerLeave={() => { handleLeave(skills, skillsText) }}
          castShadow
          receiveShadow
          geometry={nodes.Text010.geometry}
          material={nodes.Text010.material}

          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial {...texture}></meshStandardMaterial>
        </mesh>
      </group>

      <mesh
        ref={artProjects}
        onClick={handleArt}
        onPointerEnter={() => { handleEnter(artProjects, artText) }}
        onPointerLeave={() => { handleLeave(artProjects, artText) }}
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[10.01, 4.55, -5.92]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={featuredProjects}
        onClick={handleFeatured}
        onPointerEnter={() => { handleEnter(featuredProjects, featuredText) }}
        onPointerLeave={() => { handleLeave(featuredProjects, featuredText) }}
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[10.01, 5.65, -5.92]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={contact}
        onClick={handleContact}
        onPointerEnter={() => { handleEnter(contact, contactText) }}
        onPointerLeave={() => { handleLeave(contact, contactText) }}
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[10.01, 3.4, -5.92]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={webProjects}
        onClick={handleWeb}
        onPointerEnter={() => { handleEnter(webProjects, webText) }}
        onPointerLeave={() => { handleLeave(webProjects, webText) }}
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[10.01, 5.1, -5.92]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={cylinder01}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[12.31, 0.33, 3.45]}
        rotation={[0, 1.2, 0]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={homeButton}
        onClick={handleHome}
        onPointerEnter={() => { handleEnter(homeButton, homeText) }}
        onPointerLeave={() => { handleLeave(homeButton, homeText) }}
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[9.16, 6.21, -5.92]}
        size={1.0}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube159.geometry}
        material={nodes.Cube159.material}
        position={[10.17, 0.27, 2.79]}
      />
      <mesh
        ref={chair}
        castShadow
        receiveShadow
        geometry={nodes.chair.geometry}
        material={nodes.chair.material}
        position={[-3.15, 1.56, 8.8]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.17}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={cylinder03}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[2.55, 0.33, -2.45]}
        rotation={[-Math.PI, 1.1, -Math.PI]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={education}
        onClick={handleEducation}
        onPointerEnter={() => { handleEnter(education, educationText) }}
        onPointerLeave={() => { handleLeave(education, educationText) }}
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[8.31, 4, -5.92]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube087.geometry}
        material={nodes.Cube087.material}
        position={[10.17, 0.27, 2.26]}
      />
      <mesh
        ref={homeText}
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[9.17, 6.21, -5.9]}

      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube244.geometry}
        material={nodes.Cube244.material}
        position={[10.97, 0.27, 2.79]}
      />
      <mesh
        ref={cylinder02}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={nodes.Cylinder015.material}
        position={[2.55, 0.33, 2.39]}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube160.geometry}
        material={nodes.Cube160.material}
        position={[10.98, 0.27, 2.26]}
      />
      <mesh
        ref={artText}
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[10.11, 4.55, -5.91]}
      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        ref={educationText}
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[8.27, 4, -5.91]}
      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        ref={webText}
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[10.13, 5.09, -5.91]}
      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        ref={featuredText}
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[10.08, 5.65, -5.9]}
      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        ref={aboutText}
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[8.24, 3.4, -5.91]}
      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        ref={skillsText}
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[10, 4, -5.9]}
      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={nodes.Text005.material}
        position={[-1.14, 4.42, 13]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.92}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={nodes.Text004.material}
        position={[22.88, 4.64, 9.6]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.92}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        ref={contactText}
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[9.96, 3.41, -5.91]}
      >
        <meshBasicMaterial color={'white'}></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front.geometry}
        material={nodes.Front.material}
        position={[8.922, 3.13, 5]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.35}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back.geometry}
        material={nodes.Back.material}
        position={[8.922, 1.89, 5]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.36}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[22.59, 4.66, 0.35]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.92}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tools.geometry}
        material={nodes.Tools.material}
        position={[8.922, 0.68, 5]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.36}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text006.geometry}
        material={nodes.Text006.material}
        position={[5.05, 4.37, 6.45]}
        rotation={[Math.PI / 2, 0, 2.33]}
        scale={0.92}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.React.geometry}
        material={nodes.React.material}
        position={[8.46, 3.12, 4.97]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tailwind.geometry}
        material={nodes.Tailwind.material}
        position={[7.89, 3.13, 4.97]}
        rotation={[-Math.PI, 1.54, 1.57]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text008.geometry}
        material={nodes.Text008.material}
        position={[11.55, 4.34, 7.52]}
        rotation={[Math.PI / 2, 0, -2.45]}
        scale={0.92}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fiber.geometry}
        material={nodes.Fiber.material}
        position={[7.08, 3.13, 5.1]}
        rotation={[-Math.PI, 1.39, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Three.geometry}
        material={nodes.Three.material}
        position={[7.34, 3.14, 5.05]}
        rotation={[-Math.PI, 1.4, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Next.geometry}
        material={nodes.Next.material}
        position={[8.16, 3.11, 4.97]}
        rotation={[0, 1.55, -Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Node,js"].geometry}
        material={nodes["Node,js"].material}
        position={[8.46, 1.9, 4.97]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.25}>
        <meshStandardMaterial color={'grey'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Java.geometry}
        material={nodes.Java.material}
        position={[7.89, 1.9, 4.97]}
        rotation={[-Math.PI, 1.54, 1.57]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BootStrap.geometry}
        material={nodes.BootStrap.material}
        position={[7.62, 3.13, 5]}
        rotation={[-Math.PI, 1.42, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wordpress.geometry}
        material={nodes.Wordpress.material}
        position={[6.82, 3.14, 5.16]}
        rotation={[Math.PI, 1.31, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Adobe.geometry}
        material={nodes.Adobe.material}
        position={[8.46, 0.69, 4.99]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Django.geometry}
        material={nodes.Django.material}
        position={[8.16, 1.9, 4.97]}
        rotation={[0, 1.56, -1.57]}
        scale={0.25}
      >
        <meshStandardMaterial color={'grey'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blender.geometry}
        material={nodes.Blender.material}
        position={[8.16, 0.69, 4.97]}
        rotation={[0, 1.56, -1.57]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Git.geometry}
        material={nodes.Git.material}
        position={[7.62, 0.69, 5]}
        rotation={[-Math.PI, 1.42, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mayba.geometry}
        material={nodes.Mayba.material}
        position={[7.89, 0.69, 4.97]}
        rotation={[-Math.PI, 1.54, 1.57]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Aws.geometry}
        material={nodes.Aws.material}
        position={[7.33, 0.69, 5.06]}
        rotation={[-Math.PI, 1.4, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'grey'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MySQL.geometry}
        material={nodes.MySQL.material}
        position={[7.34, 1.9, 5.05]}
        rotation={[-Math.PI, 1.4, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Express.geometry}
        material={nodes.Express.material}
        position={[7.62, 1.9, 5]}
        rotation={[-Math.PI, 1.42, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'grey'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VSCode.geometry}
        material={nodes.VSCode.material}
        position={[7.06, 0.7, 5.11]}
        rotation={[-Math.PI, 1.39, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mongo.geometry}
        material={nodes.Mongo.material}
        position={[7.08, 1.9, 5.1]}
        rotation={[-Math.PI, 1.39, Math.PI / 2]}
        scale={0.25}
      >
        <meshStandardMaterial color={'grey'}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text129.geometry}
        material={nodes.Text129.material}
        position={[9.78, 3.78, 1.99]}
        rotation={[1.65, -0.3, -3.02]}
        scale={0.68}
      >
        <meshStandardMaterial {...texture}></meshStandardMaterial>
      </mesh>
    </group>
  );
}
useGLTF.preload("/subway-new-joined-final.glb");
