import React from 'react';

import './CrewLayout.scss';

const CrewLayout = ({ member }) => {
  return (
    <div className='crew-layout-container'>
      {/* image container */}
      <figure className={`crew-image-container ${member.id}`}></figure>

      {/* text-container */}
      <div className='crew-text-container'>
        <h4 className='crew-member-role'>{member.role}</h4>
        <h3 className='crew-member-name'>{member.name}</h3>

        <p className='crew-member-bio'>{member.bio}</p>
      </div>
    </div>
  );
};

export default CrewLayout;
