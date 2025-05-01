// CancelButton.jsx
import { FaTimes } from "react-icons/fa";
import "../styles/buttons.css";

export default function CancelButton({ onClick }) {
  return (
    <button className="btn cancel-btn" onClick={onClick}>
      <span className="btn-text">Cancel Changes</span>
      <span className="btn-icon">
        <FaTimes />
      </span>
    </button>
  );
}