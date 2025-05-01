import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditItemModal from "../components/EditItemModal";
import GoBackButton from "../components/GoBackButton";
import "../styles/inventory.css";

export default function InventoryPage() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editItem, setEditItem] = useState(null);

  const services = ["Sidewalk Shed", "Scaffold", "Shoring"];

  const data = {
    "Sidewalk Shed": [
      { id: 1, item: "G42295", quantity: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 2, item: "M721", quantity: 83, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 3, item: "M94796", quantity: 31, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 4, item: "S25907", quantity: 47, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 5, item: "A68446", quantity: 52, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 6, item: "F3786", quantity: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 7, item: "R69895", quantity: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 8, item: "A29259", quantity: 32, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 9, item: "A41878", quantity: 16, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 10, item: "A37244", quantity: 13, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 11, item: "M89319", quantity: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ],
    Scaffold: [
      { id: 12, item: "S26907", quantity: 50, description: "Lorem ipsum", notes: "note C" },
    ],
    Shoring: [
      { id: 13, item: "X1178", quantity: 5, description: "Lorem ipsum", notes: "note D" },
    ],
  };

  const [items, setItems] = useState(data);

  const handleEdit = (updatedItem) => {
    setItems((prev) => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory].map((i) =>
        i.id === updatedItem.id ? updatedItem : i
      ),
    }));
    setEditItem(null);
  };

  const filteredItems = selectedCategory ? items[selectedCategory] : [];

  return (
    <div className="inventory-page">
      <div className="main-grid">
        <div className="left-panel">
          <div className="panel-header">262 3rd Avenue, New York</div>
          {services.map((cat) => (
  <button
    key={cat}
    onClick={() => setSelectedCategory(cat)}
    className={`category-btn ${cat.toLowerCase().replace(" ", "-")} ${selectedCategory === cat ? "active" : ""}`}
  >
    {cat}
  </button>
))}

          <GoBackButton onClick={() => navigate("/")} className="go-back-sidebar" />
        </div>

        <div className="right-panel">
          <div className="panel-header">{selectedCategory}</div>

          {!selectedCategory ? (
            <div className="no-selection">
              <img src="/box.png" alt="empty-box" />
              <p>No Service Selected</p>
              <span>Please select a service on your left to proceed.</span>
            </div>
          ) : (
            <table className="item-table">
              <thead>
                <tr>
                  <th>Nr.</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Description</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((row, index) => (
                  <tr key={row.id} onDoubleClick={() => setEditItem(row)}>
                    <td>{index + 1}</td>
                    <td>{row.item}</td>
                    <td>{row.quantity}</td>
                    <td>{row.description}</td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {editItem && (
        <EditItemModal
          item={editItem}
          onClose={() => setEditItem(null)}
          onSave={handleEdit}
        />
      )}
    </div>
  );
}