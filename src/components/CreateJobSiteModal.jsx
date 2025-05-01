import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import Select from "react-select";
import CancelButton from "./CancelButton";
import SaveButton from "./SaveButton";
import "../styles/modal.css";

export default function CreateJobSiteModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    category: [],
    status: "",
  });

  const handleSubmit = () => {
    if (formData.name && formData.status && formData.category.length > 0) {
      onSave(formData);
      onClose();
    } else {
      alert("Please fill in all required fields.");
    }
  };
  const categoryOptions = [
    { value: "Sidewalk Shed", label: "Sidewalk Shed", color: "#11c933ce", hover: "#11c933ce" },
    { value: "Scaffold", label: "Scaffold", color: "#efd82bda", hover: "#e5d02dda" },
    { value: "Shoring", label: "Shoring", color: "#8e2892d4", hover: "#8d3e8fd4" },
  ];
  
  const statusOptions = [
    { value: "Completed", label: "Completed", color: "#11c933ce", hover: "#11c933ce" },
    { value: "In Progress", label: "In Progress", color: "#8e2892d4", hover: "#8d3e8fd4" },
    { value: "On Hold", label: "On Hold", color: "#efd82bda", hover: "#e5d02dda" },
  ];
  
  const customStyles = {
    control: (styles) => ({
      ...styles,
      height: 45,
      borderRadius: 10,
      backgroundColor: "#f3f4f6",
      border: "1px solid #e5e7eb",
      paddingLeft: "4px",
      fontSize: "14px",
      fontWeight: "500",
    }),
    option: (styles, { data, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? data.color : isFocused ? data.hover : null,
      color: isSelected ? "white" : "#111827",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 12px",
      fontWeight: 500,
      cursor: "pointer",
    }),
    multiValue: () => ({}),
    multiValueLabel: () => ({}),
    multiValueRemove: () => ({}),
  };

  const handleMultiChange = (selected) => {
    setFormData({ ...formData, category: selected || [] });
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
        <label className="modal-label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="modal-input"
          placeholder="Type the jobsite’s name"
        />

        <div className="modal-row">
          <div className="modal-col flex-1-5">
            <label className="modal-label">Category Included</label>
            <Select
              isMulti
              options={categoryOptions}
              value={formData.category}
              onChange={handleMultiChange}
              styles={customStyles}
              placeholder="Select"
              closeMenuOnSelect={true}
              hideSelectedOptions={false}
              components={{
                MultiValue: () => null,
                MultiValueLabel: () => null,
                MultiValueRemove: () => null,
              }}
              getOptionLabel={(e) => (
                <div className="select-option-label">
                  <span className="select-dot" style={{ backgroundColor: e.color }}></span>
                  {e.label}
                </div>
              )}
            />
            <div className="category-chips">
              {formData.category.map((item) => (
                <div key={item.value} className="chip">
                  <span className="chip-dot" style={{ backgroundColor: item.color }}></span>
                  <span>{item.label}</span>
                  <span
                    className="chip-close"
                    onClick={() =>
                      handleMultiChange(
                        formData.category.filter((c) => c.value !== item.value)
                      )
                    }
                  >
                    ✕
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-col flex-1">
            <label className="modal-label">Status</label>
            <Select
              options={statusOptions}
              value={statusOptions.find(opt => opt.value === formData.status)}
              onChange={(selected) => setFormData({ ...formData, status: selected?.value || "" })}
              styles={customStyles}
              placeholder="Select one"
              getOptionLabel={(e) => (
                <div className="select-option-label">
                  <span className="select-dot" style={{ backgroundColor: e.color }}></span>
                  {e.label}
                </div>
              )}
            />
          </div>
        </div>

        <div className="modal-buttons">
          <CancelButton onClick={onClose} />
          <SaveButton onClick={handleSubmit} label="Save Changes" />
        </div>
      </div>
    </div>
  );
}