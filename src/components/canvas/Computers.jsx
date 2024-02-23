import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={1}/>
      <pointLight intensity={40}/> 
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile ? 0.031 : 0.045} position={isMobile ? [-4,-1.8,-2.2] : [-2, -3.5, -1.25]} rotation={[0, 0, 0]}/>
    </mesh>
  )
}
const ComputersCanvas = () => {

  const [isMobile, setIsmobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 630px)');
    setIsmobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsmobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas frameloop='demand' shadows camera={{position: [15, 2, 10], fov: 35}} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload/>
    </Canvas>
  )
}
export default ComputersCanvas