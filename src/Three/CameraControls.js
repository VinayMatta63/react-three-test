import React, { useRef} from "react";
import { CameraHelper } from "three";
import { OrbitControls, useHelper} from "@react-three/drei";

const CameraControls = (props) => {
    const cameraRef = useRef();
    useHelper(cameraRef,CameraHelper,'red')
    return (
      <>
     <OrbitControls camera={cameraRef.current}/>
      </>
      )
  };

  export default CameraControls;