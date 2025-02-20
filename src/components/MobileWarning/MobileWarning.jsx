import { useState, useEffect } from "react";
import "./MobileWarning.css";

export default function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="mobile-warning">
      <div className="mobile-warning__content">
        <h2>Better experience on desktop</h2>
        <p>
          Sorry, the mobile/tablet version is not available yet, I'm currently
          working on it...
        </p>
      </div>
    </div>
  );
}
