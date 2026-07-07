import { useMemo, useRef, type MutableRefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  progressRef: MutableRefObject<number>;
}

const COLD = new THREE.Color('#1c2622');
const WARM = new THREE.Color('#F7F5F2');
const COLD_ACCENT = new THREE.Color('#3a3a42');
const WARM_ACCENT = new THREE.Color('#8B7CDA');

/**
 * Six desk "modules" that darken/clutter in the first third of the scroll
 * range, dissolve into a wireframe data-assembly in the middle third, and
 * resolve into a bright, organized office in the final third — the literal
 * "paper dissolves / dashboard assembles / office relights" beat from the
 * approved specification (§4.5 / §5).
 */
function Desks({ progressRef }: SceneProps) {
  const deskRefs = useRef<THREE.Mesh[]>([]);
  const positions = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => [
        (i % 3) * 1.6 - 1.6,
        -0.4,
        Math.floor(i / 3) * 1.4 - 0.7,
      ]) as [number, number, number][],
    []
  );

  useFrame(() => {
    const p = progressRef.current;
    // Beat 1 (0 - 0.35): cold/cluttered. Beat 2 (0.35 - 0.65): dissolve. Beat 3 (0.65 - 1): bright/organized.
    const officeT = THREE.MathUtils.smoothstep(p, 0.6, 1);
    const dissolveT = THREE.MathUtils.smoothstep(p, 0.3, 0.65);

    deskRefs.current.forEach((mesh, i) => {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.color.copy(COLD_ACCENT).lerp(WARM_ACCENT, officeT);
      mesh.position.y = -0.4 + Math.sin(dissolveT * Math.PI) * 0.15 * (i % 2 === 0 ? 1 : -1);
      mat.opacity = THREE.MathUtils.lerp(1, 0.4, dissolveT) + officeT * 0.6;
    });
  });

  return (
    <group>
      {positions.map((pos, i) => (
        <RoundedBox
          key={i}
          ref={(el) => {
            if (el) deskRefs.current[i] = el;
          }}
          args={[1.1, 0.5, 0.6]}
          radius={0.06}
          position={pos}
        >
          <meshStandardMaterial color={COLD_ACCENT} transparent roughness={0.6} />
        </RoundedBox>
      ))}
    </group>
  );
}

function DataAssembly({ progressRef }: SceneProps) {
  const ref = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame(({ clock }) => {
    const p = progressRef.current;
    const buildT = THREE.MathUtils.smoothstep(p, 0.35, 0.75);
    if (ref.current) {
      ref.current.scale.setScalar(THREE.MathUtils.lerp(0.2, 1, buildT));
      (ref.current.material as THREE.MeshStandardMaterial).opacity = buildT;
      ref.current.rotation.y = clock.elapsedTime * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = clock.elapsedTime * 0.2;
      (wireRef.current.material as THREE.LineBasicMaterial).opacity = THREE.MathUtils.lerp(1, 0, THREE.MathUtils.smoothstep(p, 0.6, 0.85));
    }
  });

  return (
    <group position={[0, 0.6, 0]}>
      <mesh ref={ref}>
        <boxGeometry args={[1.4, 0.9, 0.06]} />
        <meshStandardMaterial
          color="#8B7CDA"
          emissive="#6B59C4"
          emissiveIntensity={0.6}
          transparent
          opacity={0}
          roughness={0.25}
        />
      </mesh>
      <lineSegments ref={wireRef}>
        <edgesGeometry args={[new THREE.BoxGeometry(1.5, 1, 0.08)]} />
        <lineBasicMaterial color="#8B7CDA" transparent />
      </lineSegments>
    </group>
  );
}

function RigCamera({ progressRef }: SceneProps) {
  useFrame(({ camera }) => {
    const p = progressRef.current;
    camera.position.x = THREE.MathUtils.lerp(-1.4, 0, p);
    camera.position.y = THREE.MathUtils.lerp(0.6, 1.1, p);
    camera.position.z = THREE.MathUtils.lerp(5.2, 4.3, p);
    camera.lookAt(0, 0.1, 0);
  });
  return null;
}

function SceneLighting({ progressRef }: SceneProps) {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const keyRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    const p = progressRef.current;
    const officeT = THREE.MathUtils.smoothstep(p, 0.6, 1);
    if (ambientRef.current) ambientRef.current.intensity = THREE.MathUtils.lerp(0.25, 0.9, officeT);
    if (keyRef.current) {
      keyRef.current.color.copy(COLD).lerp(WARM, officeT);
      keyRef.current.intensity = THREE.MathUtils.lerp(0.6, 1.6, officeT);
    }
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.25} />
      <directionalLight ref={keyRef} position={[3, 4, 3]} intensity={0.6} />
    </>
  );
}

export default function DayInLifeScene({ progressRef }: SceneProps) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [-1.4, 0.6, 5.2], fov: 38 }} gl={{ antialias: true, alpha: true }}>
      <SceneLighting progressRef={progressRef} />
      <RigCamera progressRef={progressRef} />
      <Desks progressRef={progressRef} />
      <DataAssembly progressRef={progressRef} />
      <Environment preset="apartment" />
    </Canvas>
  );
}
