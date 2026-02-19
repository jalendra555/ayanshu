"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function About3D() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth < 768 ? 0.7 : 1);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <mesh scale={scale}>
            <torusKnotGeometry args={[1, 0.35, 180, 32]} />
            <meshStandardMaterial
              color="#00E0FF"
              metalness={0.8}
              roughness={0.2}
              emissive="#00E0FF"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
