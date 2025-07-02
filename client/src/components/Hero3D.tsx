import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, OrbitControls, Float, Html, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import ParticleSystem from "./ParticleSystem";
import FloatingObjects from "./FloatingObjects";

const Hero3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  
  // Create materials for text
  const titleMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#ffffff",
      metalness: 0.8,
      roughness: 0.2,
      emissive: "#8b5cf6",
      emissiveIntensity: 0.3,
    });
  }, []);

  const subtitleMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#06b6d4",
      metalness: 0.6,
      roughness: 0.3,
      emissive: "#06b6d4",
      emissiveIntensity: 0.2,
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      sphereRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 1;
      sphereRef.current.position.z = -6 + Math.cos(state.clock.elapsedTime * 0.5) * 1;
    }
  });

  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} color="#8b5cf6" intensity={0.8} />
      <pointLight position={[10, -10, -5]} color="#06b6d4" intensity={0.8} />
      <pointLight position={[0, 10, 0]} color="#ec4899" intensity={0.6} />

      {/* Background Stars */}
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

      {/* Central Animated Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={sphereRef} position={[0, 0, -6]}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Enhanced Particle Systems */}
      <ParticleSystem count={800} />
      
      {/* Floating Objects */}
      <FloatingObjects />

      {/* Orbit Controls for subtle interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default Hero3D;