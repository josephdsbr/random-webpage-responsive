import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Some quick text to build up on the card title</p>
        <a href="#" className="card-link">Another Link</a>
      </div>
    </div>
  )
}

export default Card;