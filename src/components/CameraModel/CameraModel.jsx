/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AleixoAlonso (https://sketchfab.com/AleixoAlonso)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/canon-at-1-retro-camera-9de66868d0f240e985da00c9480bfc82
Title: Canon AT-1 Retro Camera
*/

import React, { useRef, useState } from "react";
import { Html, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

export const SECTIONS = [
  {
    content: (
      <>
        <h2>Canon AT-1</h2>
        <p>
          Released in 1977, the Canon AT-1 is a 35mm SLR camera designed as an
          affordable, manual-focus alternative to the AE-1. With its mechanical
          reliability, robust build, and timeless design, it's a favorite among
          film photography enthusiasts and collectors.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 0, y: 1, z: 15 },
    },
    objectPosition: {
      rotation: { x: 0.1, y: 0, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>Manual Focus System</h3>
        <p>
          The Canon AT-1 features a precise manual focus system, allowing
          photographers to achieve perfect sharpness without relying on
          automation. The focus ring offers smooth and accurate adjustments.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 2, y: 0, z: 12 },
      lookAt: { x: 3, y: 0, z: 0 },

      zoom: 1,
    },
    objectPosition: {
      rotation: { x: Math.PI * 0.5, y: Math.PI * 0.5, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>Shutter Speed Dial</h3>
        <p>
          The shutter speed dial offers a wide range of speeds from 1/1000 to 2
          seconds, plus a bulb mode for long exposures, perfect for creative
          photography.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 2, y: 1, z: 15 },
    },
    objectPosition: {
      rotation: { x: Math.PI / 2, y: Math.PI * 1, z: 0 },
    },
  },
  {
    content: (
      <>
        <h3>LED Light Meter Display</h3>
        <p>
          The AT-1 is equipped with an intuitive LED light meter display inside
          the viewfinder, ensuring correct exposure for every shot, even in
          challenging lighting conditions. This feature makes it ideal for both
          beginners and professional photographers looking for precise exposure
          control.
        </p>
      </>
    ),
    cameraPosition: {
      position: { x: 2, y: 1, z: 15 },
    },
    objectPosition: {
      rotation: { x: 0, y: Math.PI * 1, z: 0 },
    },
  },
  {
    content: (
      <>
        <button> Learn more about Canon AT-1</button>
      </>
    ),
    cameraPosition: {
      position: { x: 0, y: 1, z: 10 },
      lookAt: { x: 0, y: 0.5, z: 0 },
    },
    objectPosition: {
      rotation: { x: 0, y: Math.PI * 0.07, z: 0 },
    },
  },
];

export default function CameraModel(props) {
  const { nodes, materials, ...model } = useGLTF("/models/canon.glb");

  materials.CAM0001_Textures.depthWrite = true;
  materials.CAM0001_Textures.depthTest = true;

  const groupRef = useRef();
  const scroll = useScroll();
  const [currentSection, setCurrentSection] = useState(0);

  useFrame((state, delta) => {
    const scrollOffset = scroll.offset;
    const sectionCount = SECTIONS.length;
    const sectionIndex = Math.floor(
      Math.min(scrollOffset * (sectionCount - 1), sectionCount - 1)
    );

    // Modifier le calcul de sectionProgress pour créer un effet de "palier"
    const rawProgress = (scrollOffset * (sectionCount - 1)) % 1;
    const sectionProgress = smoothstep(0.2, 0.8, rawProgress);

    setCurrentSection(sectionIndex);

    // Get current and next section positions
    const currentSection = SECTIONS[sectionIndex];
    const nextSection = SECTIONS[Math.min(sectionIndex + 1, sectionCount - 1)];

    // Interpolate camera position and rotation
    state.camera.position.x = lerp(
      currentSection.cameraPosition.position.x,
      nextSection.cameraPosition.position.x,
      sectionProgress
    );
    state.camera.position.y = lerp(
      currentSection.cameraPosition.position.y,
      nextSection.cameraPosition.position.y,
      sectionProgress
    );
    state.camera.position.z = lerp(
      currentSection.cameraPosition.position.z,
      nextSection.cameraPosition.position.z,
      sectionProgress
    );

    // Handle object position and rotation if defined in sections
    if (groupRef.current && currentSection.objectPosition) {
      const nextObjectPosition =
        nextSection.objectPosition || currentSection.objectPosition;

      // Object rotation
      groupRef.current.rotation.x = lerp(
        currentSection.objectPosition.rotation.x,
        nextObjectPosition.rotation.x,
        sectionProgress
      );
      groupRef.current.rotation.y = lerp(
        currentSection.objectPosition.rotation.y,
        nextObjectPosition.rotation.y,
        sectionProgress
      );
      groupRef.current.rotation.z = lerp(
        currentSection.objectPosition.rotation.z,
        nextObjectPosition.rotation.z,
        sectionProgress
      );
    }

    // Handle lookAt transition
    if (
      currentSection.cameraPosition.lookAt ||
      nextSection.cameraPosition.lookAt
    ) {
      const defaultLookAt = { x: 3, y: 0.5, z: 0 };
      const currentLookAt =
        currentSection.cameraPosition.lookAt || defaultLookAt;
      const nextLookAt = nextSection.cameraPosition.lookAt || defaultLookAt;

      const lookAtX = lerp(currentLookAt.x, nextLookAt.x, sectionProgress);
      const lookAtY = lerp(currentLookAt.y, nextLookAt.y, sectionProgress);
      const lookAtZ = lerp(currentLookAt.z, nextLookAt.z, sectionProgress);

      state.camera.lookAt(lookAtX, lookAtY, lookAtZ);
    } else {
      state.camera.lookAt(3, 0.5, 0);
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group name="#CAM0001_Body" rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          name="#CAM0001_Body_#CAM0001_Textures_0"
          castShadow
          receiveShadow
          geometry={nodes["#CAM0001_Body_#CAM0001_Textures_0"].geometry}
          material={materials.CAM0001_Textures}
        />
        <mesh
          name="#CAM0001_Battery_Check_#CAM0001_Textures_0"
          castShadow
          receiveShadow
          geometry={
            nodes["#CAM0001_Battery_Check_#CAM0001_Textures_0"].geometry
          }
          material={materials.CAM0001_Textures}
          position={[0.05, 0.001, 0.072]}
        />

        <mesh
          name="#CAM0001_Spool_#CAM0001_Textures_0"
          castShadow
          receiveShadow
          geometry={nodes["#CAM0001_Spool_#CAM0001_Textures_0"].geometry}
          material={materials.CAM0001_Textures}
          position={[0.05, 0.001, 0.075]}
        />
        <mesh
          name="#CAM0001_Film_Advance_#CAM0001_Textures_0"
          castShadow
          receiveShadow
          geometry={nodes["#CAM0001_Film_Advance_#CAM0001_Textures_0"].geometry}
          material={materials.CAM0001_Textures}
          position={[-0.057, 0.001, 0.077]}
        ></mesh>
        <mesh
          name="#CAM0001_Shutter_#CAM0001_Textures_0"
          castShadow
          receiveShadow
          geometry={nodes["#CAM0001_Shutter_#CAM0001_Textures_0"].geometry}
          material={materials.CAM0001_Textures}
          position={[-0.035, -0.006, 0.076]}
        />
        <mesh
          name="#CAM0001_Shutter_Speed_#CAM0001_Textures_0"
          castShadow
          receiveShadow
          geometry={
            nodes["#CAM0001_Shutter_Speed_#CAM0001_Textures_0"].geometry
          }
          material={materials.CAM0001_Textures}
          position={[-0.057, 0.001, 0.073]}
        ></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/canon.glb");

// Helper function for linear interpolation
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

// Ajouter cette fonction en bas du fichier
function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}
