import {
	PresentationControls,
	ContactShadows,
	Environment,
	Html,
	useProgress,
	ScrollControls,
	Scroll,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import CameraModel from "../CameraModel/CameraModel";
import { SECTIONS } from "../CameraModel/CameraModel";

import { useRef } from "react";

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

export default function Experience() {
	const directionalLight = useRef();

	return (
		<>
			<Suspense fallback={<Loader />}>
				<ambientLight intensity={0.5} />

				<spotLight
					ref={directionalLight}
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					shadow-mapSize={2048}
					castShadow
				/>
				<directionalLight
					ref={directionalLight}
					position={[-0.3, 0.0, 10]}
					angle={0.15}
					penumbra={1}
					shadow-mapSize={2048}
					intensity={0.2}
				/>

				<ScrollControls pages={SECTIONS.length} damping={0.15}>
					<Scroll
						html
						style={{
							width: "100vw",
						}}
					>
						<div
							className="canon-info"
							style={{
								position: "absolute",
								top: "25vh",
								left: "50vw",
								width: "40vw",
							}}
						>
							{SECTIONS.map((section, index) => (
								<div
									key={index}
									style={{
										height: "100vh",
									}}
								>
									{section.content}
								</div>
							))}
						</div>
					</Scroll>

					<PresentationControls
						global
						config={{ mass: 2, tension: 500 }}
						snap={{ mass: 4, tension: 1500 }}
						polar={[-Math.PI / 3, Math.PI / 3]}
						azimuth={[-Math.PI / 1.4, Math.PI / 2]}
					>
						<CameraModel scale={25} />
					</PresentationControls>
				</ScrollControls>

				<ContactShadows
					position={[0, -2, 0]}
					opacity={0.75}
					scale={10}
					blur={3}
					far={4}
				/>
				<Environment preset="city" />
			</Suspense>
		</>
	);
}
