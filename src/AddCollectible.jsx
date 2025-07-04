import React, { useState, useEffect, useRef } from 'react';
//import { Storage } from 'aws-amplify';
import './FormFormat.css';

function AddCollectible({ onClose }) {
  console.log("AddCollectible mounted");

  const nameRef = useRef(null);
  const typeRef = useRef(null);
  const makerRef = useRef(null);
  const priceRef = useRef(null);
  const yearRef = useRef(null);
  const conditionRef = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    console.log("Re-rendered");
  }, []);

  const makers = ["Hasbro", "Mattel", "Bandai", "Funko", "Topps", "Panini", "Wizards of the Coast", "Jakks Pacific", "NECA"];
  const conditions = ["Mint", "Near Mint", "Very Good", "Good", "Fair", "Poor"];

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log("Upload triggered with refs:", {
      name: nameRef.current.value,
      type: typeRef.current.value,
      maker: makerRef.current.value,
      price: priceRef.current.value,
      year: yearRef.current.value,
      condition: conditionRef.current.value,
      file: fileRef.current.files[0],
    });
    if (!fileRef.current.files[0] || !nameRef.current.value || !typeRef.current.value || !makerRef.current.value || !priceRef.current.value || !yearRef.current.value || !conditionRef.current.value) {
      console.log("Missing fields");
      alert("Please fill all fields.");
      return;
    }
    const fileName = `collection/${Date.now()}-${fileRef.current.files[0].name}`;
    try {
      console.log("Upload simulated for:", fileName);
      alert('Upload successful!');
      if (onClose) onClose();
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed.");
    }
  };

  const handleCancel = () => {
    console.log("Cancel triggered");
    if (onClose) onClose();
  };

  return (
    <div className="form-container">
      <button
        className="exit-button"
        onClick={(e) => { console.log("Close clicked"); onClose(); }}
        onMouseOver={(e) => console.log("Exit button hovered at:", e.target)}
      >
        ✕
      </button>
      <div className="form-content">
        <h2>Add New Collectible</h2>
        <form onSubmit={handleUpload}>
          <label>Collectible Type:</label>
          <select 
            ref={typeRef} 
            defaultValue="" 
            onFocus={(e) => console.log("Type focused at:", e.target)}
            onChange={(e) => console.log("Type changed to:", e.target.value)}
          >
            <option value="">Select type</option>
            <option value="card">Card</option>
            <option value="action-figure">Action Figure</option>
          </select>

          <label>Maker:</label>
          <select 
            ref={makerRef} 
            defaultValue="" 
            onFocus={(e) => console.log("Maker focused at:", e.target)}
            onChange={(e) => console.log("Maker changed to:", e.target.value)}
          >
            <option value="">Select maker</option>
            {makers.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>

          <label>Item Name:</label>
          <input
            ref={nameRef}
            type="text"
            defaultValue=""
            placeholder="e.g., Charizard VMAX"
            onFocus={(e) => console.log("Name focused at:", e.target)}
            onChange={(e) => console.log("Name changed to:", e.target.value)}
          />

          <label>Year:</label>
          <input
            ref={yearRef}
            type="text"
            defaultValue=""
            placeholder="e.g., 2021"
            onFocus={(e) => console.log("Year focused at:", e.target)}
            onChange={(e) => console.log("Year changed to:", e.target.value)}
          />

          <label>Condition:</label>
          <select 
            ref={conditionRef} 
            defaultValue="" 
            onFocus={(e) => console.log("Condition focused at:", e.target)}
            onChange={(e) => console.log("Condition changed to:", e.target.value)}
          >
            <option value="">Select condition</option>
            {conditions.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>

          <label>Ask Price (USD):</label>
          <input
            ref={priceRef}
            type="number"
            defaultValue=""
            placeholder="e.g., 150"
            onFocus={(e) => console.log("Price focused at:", e.target)}
            onChange={(e) => console.log("Price changed to:", e.target.value)}
          />

          <label>Upload Image:</label>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={(e) => console.log("File changed to:", e.target.files[0])}
          />

          <div className="form-buttons">
            <button type="submit">Upload Item</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCollectible;