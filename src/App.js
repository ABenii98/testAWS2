import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Collections from './Collections';
import Raffles from './Raffles';
import Management from './Management';
import Navigation from './Navigation';
import AddCollectible from './AddCollectible';
import AddRaffle from './AddRaffle';
import './App.css';

function AppContent() {
  const [showAddCollectible, setShowAddCollectible] = useState(false);
  const [showAddRaffle, setShowAddRaffle] = useState(false);

  const handleCloseModal = (modalType) => {
    if (modalType === 'collectible') setShowAddCollectible(false);
    if (modalType === 'raffle') setShowAddRaffle(false);
  };

  return (
    <>
      <header className="app-header">
        <Navigation />
      </header>
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/raffles" element={<Raffles />} />
          <Route path="/management" element={<Management 
            showAddCollectible={showAddCollectible} 
            setShowAddCollectible={setShowAddCollectible} 
            showAddRaffle={showAddRaffle} 
            setShowAddRaffle={setShowAddRaffle} 
          />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      {showAddCollectible && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddCollectible onClose={() => handleCloseModal('collectible')} />
        </div>
      )}
      {showAddRaffle && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddRaffle onClose={() => handleCloseModal('raffle')} />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;