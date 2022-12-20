import React from 'react';

import './TechnologyLayout.scss';

const TechnologyLayout = ({ technology }) => {
  return (
    <div className='technology-layout-container'>
      <figure
        className={`technology-image-container ${technology.id}`}
      ></figure>

      <div className='technology-text-container'>
        <h4 className='technology-sub-heading'>The Terminology</h4>
        <h3 className='technology-main-heading'>{technology.name}</h3>
        <p className='technology-description'>{technology.description}</p>
      </div>
    </div>
  );
};

export default TechnologyLayout;
