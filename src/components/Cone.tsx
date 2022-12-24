const Cone = () => {
  return (
    <mesh position={[0, 0, 5]}>
      <coneGeometry args={[2, 5]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Cone;
