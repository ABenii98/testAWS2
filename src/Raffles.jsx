import React, { useState, useEffect } from 'react';
import './Raffles.css';

function Raffles() {
  const [activeRaffles, setActiveRaffles] = useState([]);
  const [previousWinners, setPreviousWinners] = useState([]);

  useEffect(() => {
    // Fetch raffles.json from public/
    fetch('/raffles.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched rafflesData:', data);
        const now = new Date();
        setActiveRaffles(data.raffles.filter((raffle) => new Date(raffle.endDate) > now));
        setPreviousWinners(data.raffles.filter((raffle) => new Date(raffle.endDate) <= now));
      })
      .catch((error) => console.error('Error fetching raffles.json:', error));
  }, []);

  const handleJoinRaffle = (raffleName) => {
    console.log(`Joined raffle: ${raffleName}`);
    // Placeholder for join logic
  };

  return (
    <div className="raffles-container">
      <div className="raffles-content">
        <h2>Raffles</h2>
        <div className="raffles-grid">
          {activeRaffles.length > 0 ? (
            activeRaffles.map((raffle, index) => (
              <div key={index} className="raffle-card">
                <h3>{raffle.name}</h3>
                <p>Prize: {raffle.prize}</p>
                <p>Entry Cost: ${raffle.entryCost.toFixed(2)}</p>
                <p>Entries: {raffle.entries} / {raffle.maxEntries}</p>
                <button
                  className="join-button"
                  onClick={() => handleJoinRaffle(raffle.name)}
                  disabled={raffle.entries >= raffle.maxEntries}
                >
                  {raffle.entries >= raffle.maxEntries ? 'Full' : 'Join Raffle'}
                </button>
              </div>
            ))
          ) : (
            <p>No active raffles available.</p>
          )}
        </div>
        <h2>Previous Winners</h2>
        <div className="winners-list">
          {previousWinners.length > 0 ? (
            previousWinners.map((raffle, index) => (
              <div key={index} className="winner-item">
                <p>Raffle: {raffle.name}</p>
                <p>Winner: {raffle.winner || 'TBD'}</p>
                <p>Prize: {raffle.prize}</p>
                <p>Date: {new Date(raffle.endDate).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No previous winners to display.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Raffles;