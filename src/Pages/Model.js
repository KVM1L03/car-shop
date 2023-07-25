import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { Ground } from "./Ground";

const Model = ({ modelPath, rotationSpeed }) => {
  const model = useGLTF(modelPath);
  const meshRef = useRef();

  
  const [isRotating, setRotating] = useState(true);

  useFrame((state, delta) => {
    
    if (isRotating) {
      meshRef.current.rotation.y += rotationSpeed * delta;
    }
  });

  const handleCanvasClick = () => {
    // Toggle rotation when the user clicks the screen
    setRotating((prev) => !prev);
  };

  return (
    <mesh ref={meshRef} onClick={handleCanvasClick}>
      <hemisphereLight intensity={0.5} groundColor="white" />
      <ambientLight castShadow />
      <spotLight
        color={[0.8, 0.8, 0.8]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.8, 0.8, 0.8]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.8, 0.8, 0.8]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, -10]}
        castShadow
        shadow-bias={-0.0001}
      />
      <primitive object={model.scene} scale={2} position={[0, 0, -1.5]} rotation={[0, 0, 0]} />
    </mesh>
  );
};

const ModelCanvas = ({ modelPath }) => {
  const rotationSpeed = 0.05; // Adjust the rotation speed here

  return (
    <Canvas
      shadows
      camera={{ position: [0, 4, 10], fov: 66 }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom maxPolarAngle={Math.PI / 2} minDistance={5} maxDistance={10} />
        <Model modelPath={modelPath} rotationSpeed={rotationSpeed} />
        <Ground />
      </Suspense>

      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0} luminanceSmoothing={0.9} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>

      <Preload all />
    </Canvas>
  );
};

export default ModelCanvas;
