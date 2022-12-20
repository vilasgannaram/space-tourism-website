import React from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import './technology.scss';
import TechnologyLayout from './technologyLayout';

export const LaunchVehicle = ({ data }) => (
  <TechnologyLayout technology={data} />
);
export const SpaceCapsule = ({ data }) => (
  <TechnologyLayout technology={data} />
);
export const SpacePort = ({ data }) => <TechnologyLayout technology={data} />;

const Technology = () => {
  const location = useLocation();

  return (
    <section className='technology-container'>
      <h3 className='technology-heading'>
        <span>03</span> space launch 101
      </h3>

      <nav className='technology-navigation'>
        <ul className='technology-nav-list'>
          <li role='button' className='technology-nav-list-item'>
            <Link
              to=''
              className={`technology-nav-list-item-link
            ${location.pathname === '/technology' ? 'active' : ''}`}
            >
              1
            </Link>
          </li>

          <li role='button' className='technology-nav-list-item'>
            <Link
              to='2'
              className={`technology-nav-list-item-link
            ${location.pathname === '/technology/2' ? 'active' : ''}`}
            >
              2
            </Link>
          </li>

          <li role='button' className='technology-nav-list-item'>
            <Link
              to='3'
              className={`technology-nav-list-item-link
            ${location.pathname === '/technology/3' ? 'active' : ''}`}
            >
              3
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </section>
  );
};

export default Technology;
