
// SaveButton.jsx
import { FaCheck } from "react-icons/fa";
import "../styles/buttons.css";

export default function SaveButton({ onClick, label = "Save Changes" }) {
  return (
    <button className="btn save-btn" onClick={onClick}>
      <span className="btn-text">{label}</span>
      <span className="btn-icon">
        <FaCheck />
      </span>
    </button>
  );
}