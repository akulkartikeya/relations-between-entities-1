import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <div className="card-image">
        <img src={destination.image} alt={destination.name} />
      </div>
      <div className="card-content">
        <h2>{destination.name}</h2>
        <h3>{destination.location}</h3>
        <p>{destination.description}</p>
        <div className="price">{destination.price}</div>
      </div>
    </div>
  );
};

export default DestinationCard; 