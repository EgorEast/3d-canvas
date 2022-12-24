import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Sphere from './components/Sphere';
import Cuboid from './components/Cuboid';
import Cone from './components/Cone';
import Earth from './components/Earth';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Canvas shadows camera={{ fov: 120, position: [0, 0, 3] }} className='canvas1'>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 3]} intensity={0.5} />
        <OrbitControls enableZoom />
        <pointLight position={[-10, 0, -20]} intensity={1} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <Sphere />
        <Cone />

        <Suspense fallback={null}>
          <Cuboid />
        </Suspense>

        <Earth />

        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color='green' />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
};

export default App;
