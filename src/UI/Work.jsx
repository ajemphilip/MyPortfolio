import { Text } from "@react-three/drei"
import { useEffect, useRef } from "react"
import Details from "./Details"
import { useState } from "react"
import { gsap } from "gsap"

const Work = (props) => {

    const Dispersion = useRef()
    const Doug = useRef()
    const Slo = useRef()
    const Crs = useRef()

    const [detailState, setDetailState] = useState(false)
    const [refSaver, setRefSaver] = useState(null)
    const [positionSaver, setPositionSaver] = useState(null)
    const [openController, setOpenController] = useState(true)
    const [disableHover, setDisableHover] = useState(false)
    const [readyBack , setReadyBack] = useState(false)
    const detailsProj = useRef()
    const refArr = [Dispersion, Doug, Slo, Crs]
    const workText = useRef()

    useEffect(() => {
        detailsProj.current.scale.x = 0;
        detailsProj.current.scale.y = 0;
        detailsProj.current.scale.z = 0;

    }, [])
    const openDetails = (ref, name) => {
        if (openController) {
            setDisableHover(true)
        setReadyBack(false)
            props.sound()
            setOpenController(false)
            for (let i = 0; i < refArr.length; i++) {
                if (ref != refArr[i]) {
                    gsap.to(refArr[i].current.scale, { duration: 1, y: 0 })
                    refArr[i].current.visible = false
                }
            }
            setPositionSaver({
                mainObject: { x: ref.current.position.x, y: ref.current.position.y, z: ref.current.position.z },
                children: [{
                    x: ref.current.children[1].position.x,
                    y: ref.current.children[1].position.y,
                    z: ref.current.children[1].position.z
                },
                {
                    x: ref.current.children[2].position.x,
                    y: ref.current.children[2].position.y,
                    z: ref.current.children[2].position.z
                }]
            })
            gsap.to(workText.current.scale, { duration: 0.5, x: 0, y: 0, z: 0 })
            gsap.to(ref.current.position, { duration: 1, x: 21.82, z: 0.42, y: 3.46 })
            setDetailState(props.object.find(datum => datum.key === name));
            setRefSaver(ref)
            gsap.to(detailsProj.current.scale, { duration: 1, x: 1, y: 1, z: 1 })
            detailsProj.current.visible = true
            setTimeout(()=>{ setReadyBack(true)},1000)
        }
    }

    const closeDetails = (ref) => {
        if (readyBack) {
        props.sound()
        for (let i = 0; i < refArr.length; i++) {
            if (ref != refArr[i]) {
                gsap.to(refArr[i].current.scale, { duration: 1, y: 1 })
                refArr[i].current.visible = true
            }
        }
        gsap.to(workText.current.scale, { duration: 0.5, x: 1, y: 1, z: 1 })
        gsap.to(ref.current.position, { duration: 1, x: positionSaver.mainObject.x, z: positionSaver.mainObject.z, y: positionSaver.mainObject.y })
        gsap.to(ref.current.scale, { duration: 1, x: 1, y: 1, z: 1 })
        gsap.to(detailsProj.current.scale, { duration: 1, x: 0, y: 0, z: 0 })
        detailsProj.current.visible = false
        setTimeout(() => { 
            setDisableHover(false)  
            setOpenController(true)
        }, 1000)
    }
}

    const handleEnter = (referenceB) => {
        if (!disableHover) {
            gsap.to(referenceB.current.scale, { duration: 0.5, x: 1.04, y: 1.04, z: 1.04 });
        }
    }
    const handleLeave = (referenceB) => {
        if (!disableHover) {
            gsap.to(referenceB.current.scale, { duration: 0.5, x: 1, y: 1, z: 1 });
        }
    }

    return (
        <group>
            <Text
                ref={workText}
                fontSize={'0.25'}
                lineHeight={1}
                rotation={[0, -1.3, 0]}
                letterSpacing={0}
                position={[21.85, 3.4, 0.38]}
                font={props.TekoBold}
                characters="featured"
                color={'black'}>
                WEB PROJECTS
            </Text>
            <group
                onPointerEnter={() => { handleEnter(Dispersion) }}
                onPointerLeave={() => { handleLeave(Dispersion) }}
                onClick={() => { openDetails(Dispersion, "Dispersion") }}
                ref={Dispersion}
                position={[21.85, 2.838, 0.41]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane004.geometry}
                    material={props.nodes.Plane004.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.19, 0.04, -0.65]}
                    fontSize={'0.1'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    color={'white'}>
                    DisPerSion Lab
                </Text>
                <Text
                    anchorX={"left"}
                    position={[-0.19, -0.07, -0.65]}
                    fontSize={'0.05'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    color={'white'}>
                    Research-Creation Laboratory
                </Text>
            </group>
            <group
                onPointerEnter={() => { handleEnter(Doug) }}
                onPointerLeave={() => { handleLeave(Doug) }}
                onClick={() => { openDetails(Doug, "Doug") }}
                ref={Doug}
                position={[21.85, 2.219, 0.41]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane005.geometry}
                    material={props.nodes.Plane005.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.19, 0.04, -0.65]}
                    fontSize={'0.1'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    color={'white'}>
                    Doug Van Nort
                </Text>
                <Text
                    anchorX={"left"}
                    position={[-0.19, -0.07, -0.65]}
                    fontSize={'0.05'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    color={'white'}>
                    Personal Portfolio Website
                </Text>
            </group>
            <group
                onPointerEnter={() => { handleEnter(Slo) }}
                onPointerLeave={() => { handleLeave(Slo) }}
                onClick={() => { openDetails(Slo, "Slo") }}
                ref={Slo}
                position={[21.85, 1.595, 0.41]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane006.geometry}
                    material={props.nodes.Plane006.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.19, 0.04, -0.65]}
                    fontSize={'0.1'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    color={'black'}>
                    SloLab
                </Text>
                <Text
                    anchorX={"left"}
                    position={[-0.19, -0.07, -0.65]}
                    fontSize={'0.05'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    color={'black'}>
                    Research-Creation Laboratory
                </Text>
            </group>
            <group
                onPointerEnter={() => { handleEnter(Crs) }}
                onPointerLeave={() => { handleLeave(Crs) }}
                onClick={() => { openDetails(Crs, "Crs") }}
                ref={Crs}
                position={[21.85, 0.975, 0.41]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane007.geometry}
                    material={props.nodes.Plane007.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.19, 0.04, -0.65]}
                    fontSize={'0.1'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    color={'white'}>
                    Concrete Repair Solutions
                </Text>
                <Text
                    anchorX={"left"}
                    position={[-0.19, -0.07, -0.65]}
                    fontSize={'0.05'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    color={'white'}>
                    Concrete Services Website
                </Text>
            </group>
            <group
                ref={detailsProj}
                position={[21.84, 3, 0.415]}>
                <Details
                    sound={props.sound}
                    closeDetails={() => { closeDetails(refSaver) }}
                    TekoBold={props.TekoBold}
                    MontserratBold={props.MontserratBold}
                    MontserratRegular={props.MontserratRegular}
                    detailObject={detailState}>
                </Details>
            </group>
        </group>)

}
export default Work