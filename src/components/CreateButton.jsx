import { FaPlus } from "react-icons/fa";
import "../styles/buttons.css";

export default function CreateButton({ onClick }) {
  return (
    <button className="btn create-btn" onClick={onClick}>
      <span className="btn-text">Create</span>
      <span className="btn-icon">
        <FaPlus />
      </span>
    </button>
  );
}
