import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Star from "./Star";
import "./styles.css";

function Stream() {
  const [state, setState] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://starstream-api-gateway-b2dzz7qh.uc.gateway.dev/min-data"
//     ).then((res) => {
//         setState(res.data)
//         console.log(res.data)
//     });
//   }, []);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={4} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <Suspense fallback={null}>
        <Star />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}

export default Stream;
