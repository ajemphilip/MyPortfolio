import { Text } from "@react-three/drei"

const About = (props) => {
return(
    <group scale={0.1} rotation={[0, 2.45, 0]} position={[11.88, 2.55, 6.85]}>
     <group position={[0,5.5,0]}>
     <Text fontSize={'1.2'} textAlign="center"  font={props.TekoBold} characters="featured" color={'black'}>
     {props.state.key}
      </Text>
      <Text fontSize={'0.6'} textAlign="center"  font={props.TekoBold} characters="featured" color={'black'}>
     {props.state.jobTitle}
      </Text>
     </group>
      <Text position={[-0.05,-1.5,-0.2]} fontSize={'0.38'} textAlign="left"  font={props.MontserratRegular} characters="featured" color={'black'}>
       {props.state.description}
      </Text>
      </group>
)
}
export default About