import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const FloatingObjects = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Pre-calculate random positions and properties
  const objects = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.7,
      color: `hsl(${250 + Math.random() * 100}, 70%, ${50 + Math.random() * 30}%)`,
      speed: 0.5 + Math.random() * 1.5,
      rotationSpeed: 0.1 + Math.random() * 0.2,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        const object = objects[index];
        if (child && object) {
          child.rotation.x += object.rotationSpeed * 0.01;
          child.rotation.y += object.rotationSpeed * 0.015;
          child.rotation.z += object.rotationSpeed * 0.008;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {objects.map((obj) => (
        <Float
          key={obj.id}
          speed={obj.speed}
          rotationIntensity={0.3}
          floatIntensity={0.8}
        >
          <mesh position={obj.position} scale={obj.scale}>
            {/* Mix of different geometric shapes */}
            {obj.id % 3 === 0 && <octahedronGeometry args={[1]} />}
            {obj.id % 3 === 1 && <tetrahedronGeometry args={[1]} />}
            {obj.id % 3 === 2 && <icosahedronGeometry args={[1]} />}
            <meshStandardMaterial
              color={obj.color}
              transparent
              opacity={0.6}
              metalness={0.7}
              roughness={0.3}
              emissive={obj.color}
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default FloatingObjects;
