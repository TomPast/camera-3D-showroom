import canonLogo from "../../assets/logo/canon-logo.png";

import "./Menu.css";

export default function Menu() {
	return (
		<div className="menu">
			<img
				src={canonLogo}
				alt="Canon Logo"
				className="canon-logo"
				style={{
					height: "90px",
				}}
			/>
			<div className="menu-items">
				<div className="menu-item">
					<p>Global</p>
				</div>
				<div className="menu-item">
					<p>Focus</p>
				</div>
				<div className="menu-item">
					<p>Shutter</p>
				</div>
				<div className="menu-item">
					<p>Viewfinder</p>
				</div>
			</div>
		</div>
	);
}
