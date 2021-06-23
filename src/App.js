import React from "react";
import { Canvas} from "@react-three/fiber";
import Lights from "./Three/Lights";
import CameraControls from './Three/CameraControls';
import Box from "./Three/Box";

export default function App() {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw", backgroundColor:'black' }} 
      camera={{ fov: 55, near: 0.1, far: 1000, position: [-10, 0, 0] }} 
    >
      <Lights />
      <CameraControls />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}
