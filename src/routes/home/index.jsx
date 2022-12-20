import React from 'react';

import './home.scss';

const Home = () => {
  return (
    <section className='home-container'>
      <div className='home-text-container'>
        <h2 className='home-sub-heading'>So, you want to travel to</h2>
        <h1 className='home-main-heading'>Space</h1>
        <p className='home-description'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className='explore-container'>
        <div className='explore'>
          <h3>Explore</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
