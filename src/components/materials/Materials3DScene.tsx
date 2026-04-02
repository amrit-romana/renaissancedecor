"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function PlasterForm() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Interactive slight rotation on frame & mouse movement
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Base gentle rotation
    meshRef.current.rotation.y = t * 0.05;
    meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    
    // Mouse movement interaction parallax
    const mouseX = (state.mouse.x * Math.PI) / 8;
    const mouseY = (state.mouse.y * Math.PI) / 8;
    
    meshRef.current.rotation.y += (mouseX - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.x += (-mouseY - meshRef.current.rotation.x) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow receiveShadow>
        {/* Soft geometric form to highlight the plaster texture */}
        <sphereGeometry args={[2.5, 128, 128]} />
        <MeshDistortMaterial
          color="#C9BCB1" // --color-plaster equivalent
          envMapIntensity={0.9}
          clearcoat={0.1}
          clearcoatRoughness={0.9}
          metalness={0.15}
          roughness={0.8}
          distort={0.08} // surface irregularity mimicking hand-burnished venetian plaster
          radius={2.5}
          speed={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function Materials3DScene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 7], fov: 45 }}>
        <fog attach="fog" args={["#EAE8E4", 5, 15]} /> {/* Integrates background seamlessly */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize={1024}
        />
        <directionalLight 
          position={[-5, -5, -5]} 
          intensity={0.4} 
          color="#B9AC9F"
        />
        <Environment preset="studio" />
        <PlasterForm />
      </Canvas>
    </div>
  );
}
