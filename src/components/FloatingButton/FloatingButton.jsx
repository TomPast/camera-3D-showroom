import "./FloatingButton.css";

export default function FloatingButton() {
  return (
    <button
      className="buy-now-button"
      onClick={(e) => {
        e.preventDefault();
        window.open("https://en.wikipedia.org/wiki/Canon_AT-1", "_blank");
      }}
    >
      Buy Now - $3999
    </button>
  );
}
