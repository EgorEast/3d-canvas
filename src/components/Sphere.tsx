import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Mesh, BufferGeometry, Material } from 'three/src/Three';

import texture from '../assets/images/grass.jpg';

const Sphere = () => {
  const textureMap = useLoader(TextureLoader, texture);

  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh position={[5, 0, 0]} ref={meshRef}>
      <sphereGeometry args={[2, 32]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
};

export default Sphere;
