
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";

const Camera = (props) => {
    const t1 = useRef();
    const cameraRef = props.forwardedRef
    useFrame((state, delta) => {
        if (props.menuController === false) {
            t1.current.seek(props.scrollData.offset * t1.current.duration())
        }
        else {
            t1.current.pause()
        }
    });

    useLayoutEffect(() => {
        t1.current = gsap.timeline()
        t1.current.to(
            cameraRef.current.position,
            {
                duration: 1,
                x: 7,
                y: 2.2,
                z: 4
            },
            0
        )
            .to(
                cameraRef.current.rotation, {
                duration: 1,
                x: 0, y: -1.89, z: 0
            },
                0
            )
            .to(
                cameraRef.current.rotation,
                {
                    duration: 1,
                    x: 0,
                    y: -1.3,
                    z: 0
                },
                1
            )
            .to(
                cameraRef.current.position,
                {
                    duration: 2,
                    x: 19,
                    y: 2.45,
                    z: -1.482154
                },
                1
            )
            .to(
                cameraRef.current.position,
                {
                    duration: 1,
                    x: 19,
                    y: 2.45,
                    z: 1.197529
                },
                3
            )
            .to(
                cameraRef.current.position,
                {
                    duration: 1,
                    x: 19,
                    y: 2.45,
                    z: 3.885609
                },
                4
            )
            // about
            .to(
                cameraRef.current.rotation,
                {
                    duration: 1,
                    x: 0,
                    y: -3.82,
                    z: 0
                },
                5
            )
            .to(
                cameraRef.current.position,
                {
                    duration: 2,
                    x: 13,
                    z: 5.46,
                    y: 2.6
                },
                5
            )
            .to(
                cameraRef.current.rotation, {
                duration: 1,
                x: 0,
                y: -3.1,
                z: 0
            },
                7
            )
            .to(
                cameraRef.current.position,
                {
                    duration: 1,
                    x: 7.854942,
                    y: 2.032235,
                    z: 0.120881
                },
                7
            )
            .to(
                cameraRef.current.position,
                {
                    duration: 2,
                    x: -1,
                    y: 4,
                    z: 7.5
                },
                8
            )
            .to(
                cameraRef.current.rotation,
                {
                    duration: 2,
                    x: 0,
                    y: -4.5,
                    z: 0
                },
                8
            )
            .to(
                cameraRef.current.position,
                {
                    duration: 1,
                    x: 8,
                    y: 4,
                    z: 2
                },
                10
            )
            .to(
                cameraRef.current.rotation,
                {
                    duration: 1,
                    x: 0,
                    y: -1.8,
                    z: 0
                },
                10
            )
            .to(
                cameraRef.current.position,
                {
                    duration: 2,
                    x: 16.7,
                    y: 2.65,
                    z: 11.05
                },
                11
            )
            .to(
                cameraRef.current.rotation, {
                duration: 2,
                x: -Math.PI / 2,
                y: -4.703,
                z: 0
            }, 11
            )
    }, [])

    return (
        <PerspectiveCamera ref={props.forwardedRef} position={[-3.95, 6, -2]} rotation={[-.95, -0.3, 0]} fov={65} makeDefault  ></PerspectiveCamera>
    )
}
export default Camera