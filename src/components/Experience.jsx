import { useScroll, Sky, Box, OrbitControls, useTexture } from '@react-three/drei'
import { Platform } from './Platform'
import Lighting from './Lighting'
import { useState } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { Hud } from '@react-three/drei'
import { useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { Subway } from './Subway';
import Camera from './Camera'
import { Name } from './Name';
import Shower from './Shower';
import { Buttons } from './Buttons';
import { Tiles } from '../UI/Tiles'
import { Fog } from 'three'

export default function Experience(props) {
  const { size } = useThree()
  const scrollData = useScroll();
  const cameraRef = useRef(null);
  const menuCube = useRef()
  const [cameraPositionTemp, setCameraPositionTemp] = useState(null)
  const [blockMenu, setBlockMenu] = useState(true)
  const [menuIndicator, setMenuIndicator] = useState(false)
  const click = new Audio("/clickSound.mp3");
  click.volume = 0.5
  const soundClick = () => {
    if (props.sound) {
      click.play()
    }
  }
  const disabledScrollHandler = useCallback((e) => {
    e.preventDefault();
  }, [])

  if (menuIndicator) {
    window.addEventListener('wheel',
      disabledScrollHandler
      , { passive: false })
  }
  else {
    window.removeEventListener('wheel',
      disabledScrollHandler
      , { passive: false })
  }

  const changeButtonState = () => {
    setMenuIndicator(prevmenuIndicator => !prevmenuIndicator)
  }
  const clickHandler = () => {
    if(blockMenu) {
    soundClick()
    if (!menuIndicator) {
      setBlockMenu(false)
      setMenuIndicator(true)
      setCameraPositionTemp({
        positionX: cameraRef.current.position.x,
        positionY: cameraRef.current.position.y,
        positionZ: cameraRef.current.position.z,
        rotationX: cameraRef.current.rotation._x,
        rotationY: cameraRef.current.rotation._y,
        rotationZ: cameraRef.current.rotation._z,
        scrolloffset: scrollData.offset,
      })
      gsap.to(cameraRef.current.position, { duration: 1, x: 9.2, y: 5, z: 1 })
      gsap.to(cameraRef.current.rotation, { duration: 1, x: 0, y: -Math.PI * 2, z: 0 })
      setTimeout(()=>{
        setBlockMenu(true)
      },1100)
    }
    else {
      setBlockMenu(false)
      gsap.to(cameraRef.current.position, { duration: 1, x: cameraPositionTemp.positionX, y: cameraPositionTemp.positionY, z: cameraPositionTemp.positionZ })
      gsap.to(cameraRef.current.rotation, { duration: 1, x: cameraPositionTemp.rotationX, y: cameraPositionTemp.rotationY, z: cameraPositionTemp.rotationZ })
      setTimeout(() => {
        setMenuIndicator(false)
        scrollData.el.scrollTop = (6 * window.innerHeight) * cameraPositionTemp.scrolloffset
        scrollData.offset = cameraPositionTemp.scrolloffset
        setBlockMenu(true)
      }, 1500)
    }
  }
}
  const handleFeatured = () => {
    soundClick()
    setMenuIndicator(true)
    gsap.to(cameraRef.current.position, {
      duration: 1,
      x: 19,
      y: 2.45,
      z: -1.482154
    })
    gsap.to(cameraRef.current.rotation, {
      duration: 1,
      x: 0,
      y: -1.3,
      z: 0
    })
    setTimeout(() => {
      setMenuIndicator(false)
      scrollData.el.scrollTop = (6 * window.innerHeight) * 0.23045023696682465
      scrollData.offset = 0.23045023696682465
    }, 1500)
  }
  const handleSkills = () => {
    soundClick()
    setMenuIndicator(true)
    gsap.to(cameraRef.current.position, {
      duration: 1,
      x: 7.856549,
      y: 2.032412,
      z: 0.122548
    })
    gsap.to(cameraRef.current.rotation, {
      duration: 1,
      x: 0,
      y: -3.100225,
      z: 0
    })
    setTimeout(() => {
      setMenuIndicator(false)
      scrollData.el.scrollTop = (6 * window.innerHeight) * 0.6140252976190477
      scrollData.offset = 0.6140252976190477
    }, 1500)
  }

  useFrame((state) => {
    menuCube.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2
    menuCube.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
  })

  const texture = useTexture({
    map: "/baked.jpg",
  })
  texture.map.flipY = false
  texture.map.anisotropy = 8
  texture.map.generateMipmaps = true

  return <>
 
    <Shower></Shower>
    <Name></Name>
    <Tiles sound={soundClick}></Tiles>
    <Buttons texture={texture} handleFeatured={handleFeatured} handleSkills={handleSkills}></Buttons>
    <Hud renderPriority={1}>
      <pointLight position={[70, 100, 120]} intensity={0.55}></pointLight>
      <OrthographicCamera makeDefault position={[0, 0, 100]} />
      <mesh onClick={clickHandler} ref={menuCube} position={[-size.width / 2 + 70, size.height / 2 - 60, -200]}>
        <Box args={[60, 15, 60]}>
          <meshToonMaterial color={'#FFCC00'}></meshToonMaterial>
        </Box>
        <Box args={[60, 15, 60]} position={[0, 25, 0]}>
          <meshToonMaterial color={'#FFCC00'}></meshToonMaterial>
        </Box>
        <Box args={[60, 15, 60]} position={[0, -25, 0]}>
          <meshToonMaterial color={'#FFCC00'}></meshToonMaterial>
        </Box>
      </mesh>
    </Hud>
    <Subway></Subway>
    {/* <OrbitControls></OrbitControls> */}
    <Platform texture={texture} sound={soundClick} scrollVal={scrollData} cameraRef={cameraRef} buttonController={changeButtonState} />
    <Camera forwardedRef={cameraRef} menuController={menuIndicator} scrollData={scrollData}></Camera>
    <Lighting></Lighting>
    <Sky sunPosition={[15000, 2000, 15000]}></Sky>
  </>
}