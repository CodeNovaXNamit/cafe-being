export function PawParticles() {
  return (
    <group position={[-1, -0.2, -0.4]}>
      {new Array(6).fill(0).map((_, idx) => (
        <mesh key={idx} position={[idx * 0.22, Math.sin(idx) * 0.1, idx * 0.03]}>
          <circleGeometry args={[0.06, 12]} />
          <meshStandardMaterial color="#d6a842" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

