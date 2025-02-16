import canonLogo from "../../assets/logo/canon-logo.png";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

import "./Menu.css";

import { SECTIONS } from "../../constants/sections";
export default function Menu() {
  const { scrollContext, activeSection } = useContext(AppContext);

  const handleClick = (index) => {
    const sectionHeight = scrollContext.el.scrollHeight / SECTIONS.length; // Hauteur réelle d'une section
    let scrollPosition = index * sectionHeight + index * 40 - 50;
    if (index === SECTIONS.length - 1) {
      scrollPosition = scrollContext.el.scrollHeight - 100;
    }

    scrollContext.el.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

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
        <div
          className={`menu-item ${activeSection === 0 ? "active" : ""}`}
          onClick={() => handleClick(0)}
        >
          <p>Global</p>
        </div>
        <div
          className={`menu-item ${activeSection === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
        >
          <p>Focus</p>
        </div>
        <div
          className={`menu-item ${activeSection === 2 ? "active" : ""}`}
          onClick={() => handleClick(2)}
        >
          <p>Shutter</p>
        </div>
        <div
          className={`menu-item ${activeSection === 3 ? "active" : ""}`}
          onClick={() => handleClick(3)}
        >
          <p>Viewfinder</p>
        </div>
        <div
          className={`menu-item ${activeSection === 4 ? "active" : ""}`}
          onClick={() => handleClick(4)}
        >
          <p>Overview</p>
        </div>
      </div>
    </div>
  );
}
