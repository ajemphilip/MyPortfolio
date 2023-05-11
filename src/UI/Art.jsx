import { Text } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import Details from "./Details"
import { gsap } from "gsap"

const Art = (props) => {
    const [detailState, setDetailState] = useState(false)
    const [refSaver, setRefSaver] = useState(null)
    const [positionSaver, setPositionSaver] = useState(null)
    const [openController, setOpenController] = useState(true)
    const [disableHover, setDisableHover] = useState(false)
    const [readyBack , setReadyBack] = useState(false)
    const model = useRef()
    const carousel = useRef()
    const soot = useRef()
    const deforeventure = useRef()
    const artText = useRef()
    const detailsProj = useRef()
    const refArr = [model, carousel, soot, deforeventure]

    useEffect(() => {
        console.log(detailsProj.current);
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
            gsap.to(ref.current.children[1].material.color, { duration: 1, r: 0, g: 0, b: 0 })
            gsap.to(ref.current.children[2].material.color, { duration: 1, r: 0, g: 0, b: 0 })
            gsap.to(artText.current.scale, { duration: 0.5, x: 0, y: 0, z: 0 })
            gsap.to(ref.current.position, { duration: 1, x: 21.76, z: 2.685, y: 3.48 })
            gsap.to(ref.current.children[1].scale, { duration: 1, x: 1.2, z: 1.2, y: 1.2 })
            gsap.to(ref.current.children[1].position, { duration: 1, x: 0.12, z: 0.45, y: 0.07 })
            gsap.to(ref.current.children[2].scale, { duration: 1, x: 1, z: 1.2, y: 1.2 })
            gsap.to(ref.current.children[2].position, { duration: 1, x: 0.12, z: 0.45, y: 0.01 })

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
        gsap.to(ref.current.children[1].material.color, { duration: 1, r: 1, g: 1, b: 1 })
        gsap.to(ref.current.children[2].material.color, { duration: 1, r: 1, g: 1, b: 1 })
        gsap.to(artText.current.scale, { duration: 0.5, x: 1, y: 1, z: 1 })
        gsap.to(ref.current.position, { duration: 1, x: positionSaver.mainObject.x, z: positionSaver.mainObject.z, y: positionSaver.mainObject.y })
        gsap.to(ref.current.scale, { duration: 1, x: 1, y: 1, z: 1 })
        gsap.to(ref.current.children[1].scale, { duration: 1, x: 1, z: 1, y: 1 })
        gsap.to(ref.current.children[1].position, { duration: 1, x: positionSaver.children[0].x, z: positionSaver.children[0].z, y: positionSaver.children[0].y })
        gsap.to(ref.current.children[2].scale, { duration: 1, x: 1, z: 1, y: 1 })
        gsap.to(ref.current.children[2].position, { duration: 1, x: positionSaver.children[1].x, z: positionSaver.children[1].z, y: positionSaver.children[1].y })
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
                ref={artText}
                fontSize={'0.25'}
                lineHeight={1}
                rotation={[0, -1.3, 0]}
                letterSpacing={0}
                position={[21.85, 3.4, 3.05]}
                font={props.TekoBold}
                characters="featured"
                color={'black'}>
                ART PROJECTS
            </Text>
            <group
                ref={deforeventure}
                onPointerEnter={() => { handleEnter(deforeventure) }}
                onPointerLeave={() => { handleLeave(deforeventure) }}
                onClick={() => { openDetails(deforeventure, "deforeventure") }}
                position={[21.76, 2.84, 2.685]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane008.geometry}
                    material={props.nodes.Plane008.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.09, 0.04, -0.3]}
                    fontSize={'0.08'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    color={'white'}>
                    Deforeventure
                </Text>
                <Text
                    maxWidth={0.6}
                    anchorY={"top"}
                    anchorX={"left"}
                    position={[-0.09, -0.04, -0.3]}
                    fontSize={'0.05'} lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    color={'white'}>
                    Deforestation Web/Art Interface
                </Text>
            </group>
            <group
                onPointerEnter={() => { handleEnter(soot) }}
                onPointerLeave={() => { handleLeave(soot) }}
                onClick={() => { openDetails(soot, "soot") }}
                ref={soot}
                position={[21.97, 2.84, 3.488]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane009.geometry}
                    material={props.nodes.Plane009.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.09, 0.04, -0.3]}
                    fontSize={'0.08'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    color={'white'}>
                    Soot
                </Text>
                <Text
                    maxWidth={0.6}
                    anchorX={"left"}
                    anchorY={"top"}
                    position={[-0.09, -0.04, -0.3]}
                    fontSize={'0.05'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    color={'white'}>
                    Interactive Wildfire Unity Visualization
                </Text>
            </group>
            <group
                onPointerEnter={() => { handleEnter(model) }}
                onPointerLeave={() => { handleLeave(model) }}
                onClick={() => { openDetails(model, "model") }}
                ref={model}
                position={[21.76, 2.2, 2.685]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane010.geometry}
                    material={props.nodes.Plane010.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.09, 0.04, -0.3]}
                    fontSize={'0.08'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    color={'white'}>
                    Model
                </Text>
                <Text
                    maxWidth={0.6}
                    anchorX={"left"}
                    anchorY={"top"}
                    position={[-0.09, -0.04, -0.3]}
                    fontSize={'0.05'} lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    color={'white'}>
                    Naturally Fragile Person on the Edge
                </Text>
            </group>
            <group
                onPointerEnter={() => { handleEnter(carousel) }}
                onPointerLeave={() => { handleLeave(carousel) }}
                onClick={() => { openDetails(carousel, "carousel") }}
                ref={carousel}
                position={[21.97, 2.2, 3.488]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane011.geometry}
                    material={props.nodes.Plane011.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.09, 0.04, -0.3]}
                    fontSize={'0.08'} lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    color={'white'}>
                    Carousel
                </Text>
                <Text
                    maxWidth={0.6}
                    anchorX={"left"}
                    anchorY={"top"}
                    position={[-0.09, -0.04, -0.3]}
                    fontSize={'0.05'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    color={'white'}>
                    Weekly Drink Intake Data Visualization
                </Text>
            </group>
            <group
                ref={detailsProj}
                position={[21.87, 3.008, 3.095]}>
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
export default Art