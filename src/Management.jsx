import React from 'react';
import './FormFormat.css';

function Management({ showAddCollectible, setShowAddCollectible, showAddRaffle, setShowAddRaffle }) {
  console.log("Management mounted");

  return (
    <div className="form-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div className="form-content">
        <h2>Management</h2>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            onClick={() => setShowAddCollectible(true)}
            className="switch-button"
            style={{ marginRight: '10px' }}
          >
            Add Collectible
          </button>
          <button
            onClick={() => setShowAddRaffle(true)}
            className="switch-button"
          >
            Create Raffle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Management;