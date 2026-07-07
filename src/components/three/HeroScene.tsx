import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, RoundedBox, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/**
 * The hero "hologram": a floating glass dashboard panel with a bar chart and
 * a donut chart, both animating their values up on mount, then idling with a
 * slow bob/rotation. This is the one 3D moment every visitor sees, so it
 * carries the "premium enterprise" first impression (design spec §5).
 */
function BarChart() {
  const bars = useMemo(() => [0.4, 0.65, 0.5, 0.8, 0.6, 0.95, 0.75], []);
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((mesh, i) => {
      const target = bars[i];
      const wave = Math.sin(clock.elapsedTime * 0.6 + i) * 0.03;
      mesh.scale.y = THREE.MathUtils.lerp(mesh.scale.y, target + wave, 0.05);
      mesh.position.y = (mesh.scale.y * 1.4) / 2 - 0.7;
    });
  });

  return (
    <group ref={group} position={[-0.9, -0.1, 0.25]}>
      {bars.map((_, i) => (
        <mesh key={i} position={[i * 0.26, 0, 0]} scale={[1, 0.01, 1]}>
          <boxGeometry args={[0.16, 1.4, 0.16]} />
          <meshStandardMaterial color="#8B7CDA" emissive="#6B59C4" emissiveIntensity={0.4} roughness={0.35} />
        </mesh>
      ))}
    </group>
  );
}

function DonutChart() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.15;
  });
  return (
    <mesh ref={ref} position={[1.15, 0.15, 0.3]} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[0.42, 0.11, 24, 64, Math.PI * 1.5]} />
      <meshStandardMaterial color="#B7ABEA" emissive="#8B7CDA" emissiveIntensity={0.3} roughness={0.3} />
    </mesh>
  );
}

function DashboardPanel() {
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <group rotation={[0.08, -0.35, 0.03]}>
        <RoundedBox args={[3.6, 2.1, 0.12]} radius={0.14} smoothness={4}>
          <meshPhysicalMaterial
            color="#1E1E1E"
            roughness={0.2}
            metalness={0.1}
            clearcoat={0.6}
            transmission={0.08}
            transparent
            opacity={0.96}
          />
        </RoundedBox>
        <BarChart />
        <DonutChart />
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={1.4} />
      <DashboardPanel />
      <ContactShadows position={[0, -1.6, 0]} opacity={0.35} scale={8} blur={2.6} far={3} color="#1E1E1E" />
      <Environment preset="studio" />
    </Canvas>
  );
}
