import React from 'react';
import Card from '../Card';
const CardList: React.FC = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <Card />
      </div>
      <div className="col-sm-12 col-md-4">
        <Card />
      </div>
      <div className="col-sm-12 col-md-4">
        <Card />
      </div>
    </div>
  )
}

export default CardList;