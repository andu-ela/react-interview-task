import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import SaveButton from "./SaveButton";
import "../styles/modal.css";

export default function EditItemModal({ item, onClose, onSave }) {
  const [formData, setFormData] = useState({ ...item });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({ ...formData, quantity: parseInt(formData.quantity) });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">✕</button>

        <h2 className="modal-title">Title</h2>
        <p className="modal-text">
          <span className="modal-info-icon"><FaInfoCircle /></span>
          Informative piece of text that can be used regarding this modal.
        </p>

        <div className="modal-form-group modal-row">
          <div className="modal-col flex-1">
            <label className="modal-label">Item</label>
            <input
              name="item"
              value={formData.item}
              onChange={handleChange}
              className="modal-input"
              placeholder="Search & Select item"
            />
          </div>
          <div className="modal-col flex-1">
            <label className="modal-label">Quantity</label>
            <input
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              className="modal-input"
              placeholder="Set Quantity"
            />
          </div>
        </div>

        <div className="modal-col">
          <label className="modal-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="modal-textarea"
            placeholder="Type the description..."
          />
        </div>

        <div className="modal-col">
          <label className="modal-label">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="modal-textarea"
            placeholder="Type a note..."
          />
        </div>

        <div className="modal-buttons">
          <SaveButton onClick={handleSubmit} label="Save Changes" />
        </div>
      </div>
    </div>
  );
}
