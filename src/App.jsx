import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience.jsx";

import CameraController from "./components/CameraController/CameraController.jsx";
import Menu from "./components/Menu/Menu.jsx";

function App() {
  return (
		<>
			<Menu />
			<Canvas
				className="canvas"
				camera={{
					fov: 25,
					position: [0, 0, 15],
				}}
			>
				<CameraController />
				<Experience />
			</Canvas>
			<button className="buy-now-button">Buy Now - $3999</button>
		</>
  )
}

export default App
