import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormFormat.css';

function AddRaffle({ onClose }) {
  console.log("AddRaffle mounted"); // Check if component mounts

  const [prizeName, setPrizeName] = useState("");
  const [costPerTicket, setCostPerTicket] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [expirationTime, setExpirationTime] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Raffle submitted:", { prizeName, costPerTicket, expirationDate, expirationTime, retailPrice, photo });
    if (!photo || !prizeName || !costPerTicket || !expirationDate || !expirationTime || !retailPrice) {
      console.log("Missing fields");
      alert("Please fill all fields, including the photo.");
      return;
    }
    alert("Raffle created successfully! (Photo upload to be implemented)");
    if (onClose) onClose();
    navigate('/management');
  };

  const handleCancel = () => {
    console.log("Raffle creation cancelled");
    if (onClose) onClose();
    navigate('/management');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    console.log("Photo selected:", file);
    setPhoto(file);
  };

  return (
    <div className="form-container" style={{ border: '1px solid red' }}> {/* Debug border */}
      <button
        className="exit-button"
        onClick={onClose}
        style={{ position: 'absolute', top: '10px', right: '10px', padding: '5px 10px', fontSize: '1.2em', background: 'none', border: 'none', color: '#2c3e50', cursor: 'pointer' }}
      >
        ✕
      </button>
      <div className="form-content">
        <h2>Add New Raffle</h2>

        <label>Prize Name:</label>
        <input
          type="text"
          placeholder="e.g., Golden Charizard Card"
          value={prizeName}
          onChange={(e) => { console.log("Prize Name changed to:", e.target.value); setPrizeName(e.target.value); }}
          style={{ cursor: 'text' }}
        />

        <label>Cost per Ticket (USD):</label>
        <input
          type="number"
          placeholder="e.g., 5"
          value={costPerTicket}
          onChange={(e) => { console.log("Cost per Ticket changed to:", e.target.value); setCostPerTicket(e.target.value); }}
          style={{ cursor: 'text' }}
        />

        <label>Expiration Date:</label>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => { console.log("Expiration Date changed to:", e.target.value); setExpirationDate(e.target.value); }}
          style={{ cursor: 'pointer' }}
        />

        <label>Expiration Time:</label>
        <input
          type="time"
          value={expirationTime}
          onChange={(e) => { console.log("Expiration Time changed to:", e.target.value); setExpirationTime(e.target.value); }}
          style={{ cursor: 'pointer' }}
        />

        <label>Retail Price (USD):</label>
        <input
          type="number"
          placeholder="e.g., 150"
          value={retailPrice}
          onChange={(e) => { console.log("Retail Price changed to:", e.target.value); setRetailPrice(e.target.value); }}
          style={{ cursor: 'text' }}
        />

        <label>Add Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ cursor: 'pointer' }}
        />

        <div className="form-buttons">
          <button onClick={handleSubmit}>Submit Raffle</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddRaffle;