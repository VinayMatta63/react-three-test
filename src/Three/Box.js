import React, { useRef, useState } from "react";
import {  useFrame } from "@react-three/fiber";

const Box =(props)=> {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
  
    useFrame(() => {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    });
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <sphereBufferGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  }
  
export default Box;