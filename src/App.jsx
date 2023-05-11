import Experience from './components/Experience';
import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from '@react-three/drei';
import LoadingScreen from './UI/LoadingScreen';
import { useState, useEffect } from 'react';
const audio = new Audio("/track05.mp3");

const App = () => {
    const [start, setStart] = useState(false);
    const [sound, setSound] = useState(true);

    const setSoundSwitch = () => {
        setSound(!sound);
    }

    useEffect(() => {
        audio.loop = true;
        if (start && sound) {
            audio.play();
        }
    }, [start]);

    return (
        <>
        <Suspense fallback={null}>
            <Canvas
            flat>
                <ScrollControls pages={6} maxSpeed={5} damping={0.55}>
                    <Scroll>
                   
                        { <Experience sound={sound} />}
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </Suspense>
        <LoadingScreen soundSwitch={setSoundSwitch} soundVal={sound} started={start} onStarted={() => setStart(true)} />
        </>)
}
export default App;