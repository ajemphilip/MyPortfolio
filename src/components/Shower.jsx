import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Text3D } from "@react-three/drei";
const Shower = () => {
    const textShower01 = useRef();
    const textShower02 = useRef();
    const textShower03 = useRef();
    const textShower04 = useRef();
    const textShower05 = useRef();
    const textShower06 = useRef();

    useLayoutEffect(() => {
        gsap.fromTo(textShower01.current.position, { x: -2.2, y: 4, z: -5.25 }, { duration: 1, y: 1.2, repeat: -1 })
        gsap.fromTo(textShower01.current.rotation, { x: 0, y: 0, z: 0 }, { duration: 1, x: 3, y: 1.2, repeat: -1 })

        gsap.fromTo(textShower02.current.position, { x: -2.2, y: 4, z: -5.25 }, { duration: 1.5, y: 1.2, repeat: -1 })
        gsap.fromTo(textShower02.current.rotation, { x: 0, y: 0, z: 0 }, { duration: 1.5, x: 3, y: 1.2, repeat: -1 })

        gsap.fromTo(textShower03.current.position, { x: -1.2, y: 4, z: -5.25 }, { duration: 1.76, y: 1.2, repeat: -1 })
        gsap.fromTo(textShower03.current.rotation, { x: 0, y: 0, z: 0 }, { duration: 1.76, x: 3, y: 1.2, repeat: -1 })

        gsap.fromTo(textShower04.current.position, { x: -1.2, y: 4, z: -5.25 }, { duration: 2, y: 1.2, repeat: -1 })
        gsap.fromTo(textShower04.current.rotation, { x: 0, y: 0, z: 0 }, { duration: 2, x: 3, y: 1.2, repeat: -1 })

        gsap.fromTo(textShower05.current.position, { x: -3, y: 4, z: -5.1 }, { duration: 1.3, y: 1.2, repeat: -1 })
        gsap.fromTo(textShower05.current.rotation, { x: 0, y: 0, z: 0 }, { duration: 1.3, x: 3, y: 1.2, repeat: -1 })

        gsap.fromTo(textShower06.current.position, { x: -3, y: 4, z: -5.1 }, { duration: 1.1, y: 1.2, repeat: -1 })
        gsap.fromTo(textShower06.current.rotation, { x: 0, y: 0, z: 0 }, { duration: 1.1, x: 3, y: 1.2, repeat: -1 })
    })
    return (<>
        <Text3D ref={textShower01} height={0.1} position={[-2, 6, -5.25]} size={0.4} font="/Teko_Regular.json">
            1
            <meshToonMaterial color="orange" />
        </Text3D>
        <Text3D ref={textShower02} position={[-2, 6, -5.25]} size={0.3} font="/Teko_Regular.json">
            0
            <meshToonMaterial color="green" />
        </Text3D>

        <Text3D ref={textShower03} position={[-1.2, 6, -5.25]} size={0.4} font="/Teko_Regular.json">
            1
            <meshToonMaterial color="orange" />
        </Text3D>
        <Text3D ref={textShower04} position={[-1.2, 6, -5.25]} size={0.3} font="/Teko_Regular.json">
            0
            <meshToonMaterial color="green" />
        </Text3D>

        <Text3D ref={textShower05} position={[-3, 6, -5.1]} size={0.3} font="/Teko_Regular.json">
            1
            <meshToonMaterial color="green" />
        </Text3D>
        <Text3D ref={textShower06} position={[-3, 8, -5.1]} size={0.1} font="/Teko_Regular.json">
            0
            <meshToonMaterial color="orange" />
        </Text3D>
    </>)
}
export default Shower;