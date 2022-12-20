import React from 'react';

import './DestinationLayout.scss';

const DestinationLayout = ({ destination }) => {
  return (
    <div className='destination-layout-container'>
      <figure className={`destination-image ${destination.name}`}></figure>

      <div className='text-container'>
        <div className='heading-description-container'>
          <h2 className='heading'>{destination.name}</h2>
          <p className='description'>{destination.description}</p>
        </div>

        {/* distance and travel */}
        <div className='distance-travel-container'>
          <div className='distance'>
            <h4>avg. distance</h4>
            <p>{destination.distance}</p>
          </div>

          <div className='travel'>
            <h4>est. travel time</h4>
            <p>{destination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationLayout;
