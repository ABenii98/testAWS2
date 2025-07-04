import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Updated CSS file

function Home() {
  const featuredItems = [
    { name: 'Charizard VMAX', price: '$150.00', image: '/data/Char.jpg', link: '/collections' },
    { name: 'Pikachu Action Figure', price: '$25.00', image: '/data/Bman.jpg', link: '/collections' },
  ];

  const recentActivity = [
    'New listing: Eevee V added!',
    'User sold Dragonite V for $85.00',
    'Raffle winner announced: Snorlax V!',
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to C4 Booming Collectibles</h1>
        <p>Connect with our Facebook community to buy, sell, and trade collectibles!</p>
        <div className="home-cta">
          <Link to="/collections" className="cta-button">Browse Collections</Link>
          <Link to="/management" className="cta-button">Start Selling</Link>
          <Link to="/raffles" className="cta-button">Join Raffles</Link>
        </div>
      </header>

      <div className="home-content">
        <section className="featured-section">
          <h2>Featured Collectibles</h2>
          <div className="carousel">
            {featuredItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Link to={item.link} className="view-details">View Details</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="raffle-highlights">
          <h2>Raffle Highlights</h2>
          <p>Next Raffle: Win a Mewtwo V! Ends July 15, 2025.</p>
          <Link to="/raffles" className="raffle-link">Join Now</Link>
        </section>

        <section className="community-spotlight">
          <h2>Community Spotlight</h2>
          <p>Collector of the Month: John D. - Sold 5 rare cards this month!</p>
          <Link to="/community" className="community-link">Join Our Facebook Group</Link>
        </section>

        <section className="quick-trade">
          <h2>Quick Buy/Sell</h2>
          <form className="trade-form">
            <input type="text" placeholder="Item Name" />
            <input type="number" placeholder="Price" step="0.01" />
            <select>
              <option value="mint">Mint</option>
              <option value="near-mint">Near Mint</option>
              <option value="very-good">Very Good</option>
              <option value="good">Good</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="activity-feed">
          <h2>Latest Activity</h2>
          <ul>
            {recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;