import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
import Star from "./star";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
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
        {/* <OrbitControls autoRotate /> */}
      </Canvas>
    </div>
  );
}

export default App;
