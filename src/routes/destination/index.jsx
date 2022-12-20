import React from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import './index.scss';
import DestinationLayout from './destinationLayout';

export const Moon = ({ data }) => <DestinationLayout destination={data} />;
export const Mars = ({ data }) => <DestinationLayout destination={data} />;
export const Europa = ({ data }) => <DestinationLayout destination={data} />;
export const Titan = ({ data }) => <DestinationLayout destination={data} />;

const Destination = () => {
  const location = useLocation();

  console.log(location);

  return (
    <section className='destination-container'>
      <h3 className='destination-heading'>
        <span>01</span> Pick your destination
      </h3>

      <nav className='destination-navigation'>
        <ul className='destination-list'>
          <li className='destination-list-item'>
            <Link
              to=''
              className={`destination-list-item-link ${
                location.pathname === '/destination' ? 'active' : ''
              }`}
            >
              Moon
            </Link>
          </li>
          <li className='destination-list-item'>
            <Link
              to='mars'
              className={`destination-list-item-link ${
                location.pathname === '/destination/mars' ? 'active' : ''
              }`}
            >
              Mars
            </Link>
          </li>
          <li className='destination-list-item'>
            <Link
              to='europa'
              className={`destination-list-item-link ${
                location.pathname === '/destination/europa' ? 'active' : ''
              }`}
            >
              Europa
            </Link>
          </li>
          <li className='destination-list-item'>
            <Link
              to='titan'
              className={`destination-list-item-link ${
                location.pathname === '/destination/titan' ? 'active' : ''
              }`}
            >
              Titan
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </section>
  );
};

export default Destination;
