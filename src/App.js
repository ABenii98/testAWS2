import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Home from './Home';
import Collections from './Collections';
import Raffles from './Raffles';
import Management from './Management';
import Navigation from './Navigation';
import AddCollectible from './AddCollectible';
import AddRaffle from './AddRaffle';
import CheckoutForm from './CheckoutForm'; // 🆕 Import your Stripe form
import './App.css';

// 🔐 Replace with your real publishable key
const stripePromise = loadStripe('pk_test_51Rh6qaQRuKPaHWOrqt0pf2pRPH2vvCLh5rUQRWDONPKTY5HrCV15Z00WE9WcuwRREDp0i2zqqDOEhdH4AQVC5CQP00dctHCzRe');

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
          <Route path="/management" element={
            <Management 
              showAddCollectible={showAddCollectible} 
              setShowAddCollectible={setShowAddCollectible} 
              showAddRaffle={showAddRaffle} 
              setShowAddRaffle={setShowAddRaffle} 
            />
          } />
          {/* 🆕 Add Stripe Checkout route */}
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {showAddCollectible && (
        <div className="modal-overlay">
          <AddCollectible onClose={() => handleCloseModal('collectible')} />
        </div>
      )}
      {showAddRaffle && (
        <div className="modal-overlay">
          <AddRaffle onClose={() => handleCloseModal('raffle')} />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <AppContent />
      </Elements>
    </Router>
  );
}

export default App;
