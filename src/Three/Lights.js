import React, { useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";
import { useHelper} from "@react-three/drei";

const Lights = () => {
    const spotLightRef = useRef();
    const pointLightRef = useRef();
    useHelper(spotLightRef, SpotLightHelper);
    useHelper(pointLightRef, PointLightHelper);
  
    return (
      <>
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          distance={20}
          ref={spotLightRef}
          color={0xff0000}
          intensity={5}
        />
        <pointLight position={[-3, -3, -3]} ref={pointLightRef} color={0x0000ff} intensity={5}/>
        {/* <ambientLight intensity={0.5} /> */}
      </>
    );
  };
  
  export default Lights;