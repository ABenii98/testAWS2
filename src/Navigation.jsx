import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Ensure this import is present

function Navigation() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Track authentication state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

  const handleSignOut = () => {
    setIsSignedIn(false); // Toggle sign-out
    setIsMenuOpen(false); // Close menu on sign-out
    // Add actual sign-out logic (e.g., API call) here if needed
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-title">C4 Booming Collectibles</div>
      <div className="nav-content">
        <div className="logo">
          <Link to="/">
            <img src="/Logo.jpg" alt="C4 Logo" className="nav-logo-img" />
          </Link>
        </div>
        <div className={`nav-options ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/collections" onClick={toggleMenu}>Collections</Link></li>
            <li><Link to="/raffles" onClick={toggleMenu}>Raffles</Link></li>
            <li><Link to="/management" onClick={toggleMenu}>Management</Link></li>
          </ul>
          <div className="nav-auth">
            {isSignedIn ? (
              <Link to="/" className="nav-auth-link" onClick={handleSignOut}>Sign Out</Link>
            ) : (
              <Link to="/signin" className="nav-auth-link" onClick={toggleMenu}>Sign In</Link>
            )}
          </div>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;