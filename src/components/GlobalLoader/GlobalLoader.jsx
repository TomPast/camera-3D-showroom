import { AppContext } from "../../context/appContext";
import { useContext } from "react";
import "./GlobalLoader.css";

export default function GlobalLoader() {
  const { loadingProgress, isLoading } = useContext(AppContext);
  return (
    isLoading && (
      <div className="loader-container">
        <div
          className="loader"
          style={{ backgroundSize: `${loadingProgress}%` }}
        ></div>
      </div>
    )
  );
}
