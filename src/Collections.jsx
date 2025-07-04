import React, { useState, useEffect } from 'react';
import './Collections.css';

function Collections() {
  const [collectionData, setCollectionData] = useState({ items: [] });
  const [showCards, setShowCards] = useState(true);

  useEffect(() => {
    fetch('/collections.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched collectionData:', data);
        setCollectionData(data);
      });
  }, []);

  const filteredItems = showCards
    ? collectionData.items.filter((item) => item.type === 'card')
    : collectionData.items.filter((item) => item.type === 'action-figure');

  console.log('Filtered items:', filteredItems);

  return (
    <div className="collection-container">
      <div className="collection-content">
        <h2>Collections</h2>
        <div className="switch-container">
          <button onClick={() => setShowCards(!showCards)} className="switch-button">
            {showCards ? 'Switch to Action Figures' : 'Switch to Cards'}
          </button>
        </div>
        <div className="grid-container">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={index} className="item-card">
                <img src={process.env.PUBLIC_URL + item.photoKey} alt={item.name} style={{ maxWidth: '100%' }} />
                <h3>{item.name}</h3>
                <p>Type: {item.type}</p>
                <p>Maker: {item.maker}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Year: {item.year}</p>
                <p>Condition: {item.condition}</p>
                <button className="offer-button" onClick={() => console.log(`Offer clicked for ${item.name}`)}>
                  Make Offer
                </button>
              </div>
            ))
          ) : (
            <p>No items to display.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collections;