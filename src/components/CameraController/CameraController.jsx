import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export default function CameraController() {
	const { camera } = useThree();

	useEffect(() => {
		console.log(camera);
		camera.position.set(2, 1, 15);
		camera.lookAt(3, 0.5, 0);
		camera.updateProjectionMatrix();
	}, [camera]);

	return null;
}
