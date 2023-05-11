import { Text } from "@react-three/drei"
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react"
import Details from "./Details";

const Featured = (props) => {
    const [detailState, setDetailState] = useState(false)
    const [refSaver, setRefSaver] = useState(null)
    const [positionSaver, setPositionSaver] = useState(null)
    const [openController, setOpenController] = useState(true)
    const [disableHover, setDisableHover] = useState(false)
    const [readyBack , setReadyBack] = useState(false)
    const Yourganizer = useRef()
    const portfolioGroup = useRef()
    const featuredText = useRef()
    const detailsProj = useRef()
    const refArr = [Yourganizer, portfolioGroup]
    const sound = props.sound

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
            gsap.to(featuredText.current.scale, { duration: 0.5, x: 0, y: 0, z: 0 })
            gsap.to(ref.current.position, { duration: 1, x: 21.73, z: -2.668, y: 3.457 })
            gsap.to(ref.current.scale, { duration: 1, x: 0.5, y: 0.5, z: 0.5 })
            gsap.to(ref.current.children[1].scale, { duration: 1, x: 1.5, z: 1.5, y: 1.5 })
            gsap.to(ref.current.children[1].position, { duration: 1, x: 0.26, z: 0.93, y: 0.11 })
            gsap.to(ref.current.children[2].scale, { duration: 1, x: 1.5, z: 1.5, y: 1.5 })
            gsap.to(ref.current.children[2].position, { duration: 1, x: 0.26, z: 0.93, y: -0.08 })

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
        gsap.to(featuredText.current.scale, { duration: 0.5, x: 1, y: 1, z: 1 })
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
                ref={featuredText}
                fontSize={'0.25'}
                rotation={[0, -1.3, 0]}
                position={[21.76, 3.42, -2.55]}
                font={props.TekoBold}
                characters="featured"
                color={'black'}>
                FEATURED
            </Text>
            {/* Yourganizer */}
            <group
                onPointerEnter={() => { handleEnter(Yourganizer) }}
                onPointerLeave={() => { handleLeave(Yourganizer) }}
                position={[21.83, 2.56, -2.265]}
                onClick={() => { openDetails(Yourganizer, "Yourganizer") }}
                ref={Yourganizer}>
                <mesh
                    geometry={props.nodes.Plane.geometry}
                    material={props.nodes.Plane.material}
                >
                </mesh>
                <Text
                    anchorX={"left"}
                    position={[-0.2, 0.4, -0.65]}
                    fontSize={'0.15'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    characters="featured"
                    color={'black'}>
                    Yourganizer
                </Text>
                <Text
                    anchorX={"left"}
                    position={[-0.2, 0.28, -0.65]}
                    fontSize={'0.05'}
                    lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    characters="featured"
                    color={'black'}>
                    Your Personal Academic Organizer
                </Text>
            </group>
            {/* Portfolio */}
            <group
                onPointerEnter={() => { handleEnter(portfolioGroup) }}
                onPointerLeave={() => { handleLeave(portfolioGroup) }}
                position={[21.83, 1.29, -2.26]}
                onClick={() => { openDetails(portfolioGroup, "Portfolio") }}
                ref={portfolioGroup}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={props.nodes.Plane001.geometry}
                    material={props.nodes.Plane001.material}
                />
                <Text
                    anchorX={"left"}
                    position={[-0.2, 0.4, -0.65]}
                    fontSize={'0.15'} lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratBold}
                    characters="featured"
                    color={'black'}>
                    Portfolio
                </Text>
                <Text
                    anchorX={"left"}
                    position={[-0.2, 0.28, -0.65]}
                    fontSize={'0.05'} lineHeight={1}
                    rotation={[0, -1.3, 0]}
                    letterSpacing={0}
                    textAlign="left"
                    font={props.MontserratRegular}
                    characters="featured" color={'black'}>
                    React Three Fiber Portfolio
                </Text>
            </group>
            <group
                ref={detailsProj}
                position={[21.83, 3, -2.26]}>
                <Details
                    sound={props.sound}
                    closeDetails={() => { closeDetails(refSaver) }}
                    TekoBold={props.TekoBold}
                    MontserratBold={props.MontserratBold}
                    MontserratRegular={props.MontserratRegular}
                    detailObject={detailState}>
                </Details>
            </group>
        </group>
    )
}
export default Featured