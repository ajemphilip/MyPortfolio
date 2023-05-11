import { Text } from "@react-three/drei"
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

const Details = (props) => {
    const { nodes } = useGLTF("/button-ui.glb");

    return (<group>
        <group>
            <Text anchorX={"left"} position={[-0.2, -0.03, -0.71]} fontSize={'0.09'} lineHeight={1} rotation={[0, -1.3, 0]} letterSpacing={0} textAlign="left" font={props.MontserratBold} characters="featured" color={'black'}>
                Technology
            </Text>
            <Text maxWidth={1.45} anchorX={"left"} anchorY={"top"} position={[-0.2, -0.1, -0.71]} fontSize={'0.06'} lineHeight={1.2} rotation={[0, -1.3, 0]} letterSpacing={0} textAlign="left" font={props.MontserratRegular} characters="featured" color={'black'}>
                {props.detailObject.technology}
            </Text>
            <Text anchorX={"left"} position={[-0.2, -0.38, -0.71]} fontSize={'0.09'} lineHeight={1} rotation={[0, -1.3, 0]} letterSpacing={0} textAlign="left" font={props.MontserratBold} characters="featured" color={'black'}>
                About
            </Text>
            <Text maxWidth={1.45} anchorX={"left"} anchorY={"top"} position={[-0.2, -0.455, -0.71]} fontSize={'0.06'} lineHeight={1.2} rotation={[0, -1.3, 0]} letterSpacing={0} textAlign="left" font={props.MontserratRegular} characters="featured" color={'black'}>
                {props.detailObject.description}
            </Text>
            {props.detailObject.references && (<>
                <Text anchorX={"left"} position={[-0.2, -1.45, -0.71]} fontSize={'0.09'} lineHeight={1} rotation={[0, -1.3, 0]} letterSpacing={0} textAlign="left" font={props.MontserratBold} characters="featured" color={'black'}>
                    References
                </Text>
                <Text maxWidth={1.45} anchorX={"left"} anchorY={"top"} position={[-0.2, -1.53, -0.71]} fontSize={'0.06'} lineHeight={1.2} rotation={[0, -1.3, 0]} letterSpacing={0} textAlign="left" font={props.MontserratRegular} characters="featured" color={'black'}>
                    {props.detailObject.references}
                </Text>
            </>)}
        </group>
        {props.detailObject.link && <group onClick={() => { window.open(`${props.detailObject.link}`); props.sound()}} position={[-0.1, -2.21, -0.39]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane013.geometry}
                material={nodes.Plane013.material}
                scale={[1, 0.88, 1]}
            >
                <meshStandardMaterial color={'grey'}></meshStandardMaterial>
            </mesh>
            <Text anchorX={"center"} position={[-0.01, 0, 0]} fontSize={'0.055'} lineHeight={1} rotation={[0, -1.3, 0]} letterSpacing={0} textAlign="left" font={props.MontserratBold} characters="featured" color={'black'}>
                Visit
            </Text>
        </group>}
        <group scale={[1, 0.88, 1]} position={[0.113, -2.21, 0.39]}
            onClick={props.closeDetails}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane013.geometry}
                material={nodes.Plane013.material}
            >
                <meshStandardMaterial color={'grey'}></meshStandardMaterial>
            </mesh>
            <Text anchorX={"center"} position={[-0.01, 0, 0]} fontSize={'0.055'} lineHeight={1} rotation={[0, -1.3, 0]} letterSpacing={0} textAlign="left" font={props.MontserratBold} characters="featured" color={'black'}>
                Back
            </Text>
        </group>
    </group>
    )
}
export default Details