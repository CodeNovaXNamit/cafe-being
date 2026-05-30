export function FloatingBeans() {
  return (
    <group>
      {[
        [1.2, 0.7, -0.2],
        [0.8, -0.1, 0.35],
        [1.45, 0.25, 0.5],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#7b4f2e" roughness={0.75} />
        </mesh>
      ))}
    </group>
  );
}

