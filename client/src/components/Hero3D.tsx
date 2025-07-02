import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, OrbitControls, Float, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import ParticleSystem from "./ParticleSystem";
import FloatingObjects from "./FloatingObjects";

const Hero3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create gradient material for text
  const titleMaterial = useMemo(() => {
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#8b5cf6"),
    });
    return material;
  }, []);

  const subtitleMaterial = useMemo(() => {
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#06b6d4"),
    });
    return material;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#8b5cf6" intensity={0.5} />
      <pointLight position={[10, -10, -5]} color="#06b6d4" intensity={0.5} />

      {/* Particle Systems */}
      <ParticleSystem count={500} />
      
      {/* Floating Objects */}
      <FloatingObjects />

      {/* Main Content Group */}
      <group ref={groupRef}>
        {/* Main Title */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.8}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            material={titleMaterial}
          >
            HACKFINITY
          </Text>
        </Float>

        {/* Subtitle */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
          <Text
            position={[0, 0.8, 0]}
            fontSize={0.25}
            color="#8b5cf6"
            anchorX="center"
            anchorY="middle"
          >
            Infinite Fun. Infinite Creativity.
          </Text>
        </Float>

        {/* Tagline */}
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <Text
            position={[0, 0.3, 0]}
            fontSize={0.18}
            color="#06b6d4"
            anchorX="center"
            anchorY="middle"
          >
            From Caffeine to Code – Experience the Best
          </Text>
        </Float>

        {/* Date */}
        <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <Text
            position={[0, -0.2, 0]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            October 18, 2025
          </Text>
        </Float>

        {/* Event Description */}
        <Float speed={1.3} rotationIntensity={0.1} floatIntensity={0.2}>
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.15}
            color="#9ca3af"
            anchorX="center"
            anchorY="middle"
          >
            The World's Biggest Agentic AI Hackathon
          </Text>
        </Float>
      </group>

      {/* Orbit Controls for interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      {/* Overlay UI Elements */}
      <Html transform occlude="blending" position={[0, -2, 0]} center>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#domains");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Explore the Future
          </motion.button>
        </motion.div>
      </Html>
    </>
  );
};

export default Hero3D;
