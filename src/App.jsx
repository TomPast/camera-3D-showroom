import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience.jsx";
import Menu from "./components/Menu/Menu.jsx";
import { useState } from "react";
import { AppContext } from "./context/appContext.js";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, loadingProgress, setLoadingProgress }}
    >
      <GlobalLoader />
      {!isLoading && (
        <>
          <Menu />

          <button className="buy-now-button">Buy Now - $3999</button>
        </>
      )}
      <Canvas
        className="canvas"
        camera={{
          fov: 25,
          position: [0, 0, 15],
        }}
      >
        <Experience />
      </Canvas>
    </AppContext.Provider>
  );
}
