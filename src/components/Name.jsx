import { useGLTF } from "@react-three/drei";

export function Name(props) {
  const { nodes } = useGLTF("/name.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text009.geometry}
        material={nodes.Text009.material}
        position={[-2.01, 0.145, -3.92]}
        rotation={[-0.02, 0, -0.01]}
        scale={0.91}
      >
        <meshStandardMaterial color={'#FFC800'}></meshStandardMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/name.glb");