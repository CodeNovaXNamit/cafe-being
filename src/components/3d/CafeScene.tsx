"use client";

import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FloatingBeans } from "./FloatingBeans";
import { FloatingCup } from "./FloatingCup";
import { PawParticles } from "./PawParticles";

export default function CafeScene() {
  return (
    <div className="absolute inset-0 hidden opacity-80 md:block">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.65} />
        <directionalLight position={[2, 3, 3]} intensity={1.25} color="#f6c486" />
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
          <FloatingCup position={[0, -0.15, 0]} />
          <FloatingBeans />
          <PawParticles />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

