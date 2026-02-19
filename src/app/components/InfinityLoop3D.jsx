"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Method4DLoop() {
  // Infinity loop curve
  class InfinityCurve extends THREE.Curve {
    getPoint(t) {
      const a = 1.6;
      const x = a * Math.sin(2 * Math.PI * t);
      const y = (a / 2) * Math.sin(4 * Math.PI * t);
      return new THREE.Vector3(x, y, 0);
    }
  }

  const curve = new InfinityCurve();
  const geometry = new THREE.TubeGeometry(curve, 200, 0.12, 32, true);

  // Node positions (matching Snap 1 layout)
  const nodes = [
    { pos: [1.6, 0, 0], label: "DISCOVER" },
    { pos: [-1.6, 0, 0], label: "DEFINE" },
    { pos: [0.8, -0.8, 0], label: "DEVELOP" },
    { pos: [-0.8, 0.8, 0], label: "DETERMINE" }
  ];

  return (
    <div style={{ width: "100%", height: "420px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />

        {/* Infinity Loop */}
        <mesh geometry={geometry} rotation={[0.3, 0.5, 0]}>
          <meshStandardMaterial
            color="#A855F7"
            metalness={0.7}
            roughness={0.25}
            emissive="#9333EA"
            emissiveIntensity={1.1}
          />
        </mesh>

        {/* Four glowing nodes */}
        {nodes.map((n, i) => (
          <mesh key={i} position={n.pos}>
            <sphereGeometry args={[0.16, 32, 32]} />
            <meshStandardMaterial
              color="#F472B6"
              emissive="#EC4899"
              emissiveIntensity={1.4}
            />
          </mesh>
        ))}

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.3} />
      </Canvas>
    </div>
  );
}
