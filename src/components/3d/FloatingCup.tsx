import { ThreeElements } from "@react-three/fiber";

export function FloatingCup(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.65, 0.75, 0.85, 32]} />
        <meshStandardMaterial color="#efe5d6" roughness={0.55} />
      </mesh>
      <mesh position={[0.95, 0.05, 0]}>
        <torusGeometry args={[0.22, 0.05, 16, 32]} />
        <meshStandardMaterial color="#efe5d6" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.46, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.04, 24]} />
        <meshStandardMaterial color="#4b3628" roughness={0.75} />
      </mesh>
    </group>
  );
}
