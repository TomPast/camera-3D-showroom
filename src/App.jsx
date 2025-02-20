import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience.jsx";
import Menu from "./components/Menu/Menu.jsx";
import { useState } from "react";
import { AppContext } from "./context/appContext.js";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader.jsx";
import FloatingButton from "./components/FloatingButton/FloatingButton.jsx";
import MobileWarning from "./components/MobileWarning/MobileWarning.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [scrollContext, setScrollContext] = useState(null);
  const [activeSection, setActiveSection] = useState(0);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loadingProgress,
        setLoadingProgress,
        scrollContext,
        setScrollContext,
        activeSection,
        setActiveSection,
      }}
    >
      <MobileWarning />
      <GlobalLoader />
      {!isLoading && (
        <>
          <Menu />
          <FloatingButton />
        </>
      )}
      <Canvas
        className={`canvas ${!isLoading ? "canvas--visible" : ""}`}
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
