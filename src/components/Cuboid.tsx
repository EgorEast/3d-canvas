import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import { Mesh, BufferGeometry, Material } from 'three';

const Cuboid = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh castShadow position={[-5, 0, 0]} ref={meshRef}>
      <boxBufferGeometry args={[1, 2, 1]} />
      <MeshWobbleMaterial attach='material' /*distort={0.5}*/ color='red' />
    </mesh>
  );
};

export default Cuboid;
