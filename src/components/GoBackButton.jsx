import { FaArrowLeft } from "react-icons/fa";
import "../styles/buttons.css";


export default function GoBackButton({ onClick, className = "" }) {
    return (
      <button className={`go-back-button ${className}`} onClick={onClick}>
        <span className="go-back-text">Go Back</span>
        <span className="go-back-icon">
          <FaArrowLeft />
        </span>
      </button>
    );
  }