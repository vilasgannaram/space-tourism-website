import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import './crew.scss';
import CrewLayout from './crewLayout';

export const Commandor = ({ data }) => <CrewLayout member={data} />;
export const MissionSpecialist = ({ data }) => <CrewLayout member={data} />;
export const Pilot = ({ data }) => <CrewLayout member={data} />;
export const FlightEngineer = ({ data }) => <CrewLayout member={data} />;

const Crew = () => {
  const location = useLocation();

  return (
    <section className='crew-container'>
      <h2 className='crew-heading'>
        <span>02</span>meet your crew
      </h2>

      <nav className='crew-navigation'>
        <ul className='crew-navigation-list'>
          <li className='crew-navigation-list-item'>
            <Link
              to=''
              className={`crew-navigation-list-item-link ${
                location.pathname === '/crew' ? 'active' : ''
              }`}
            />
          </li>

          <li className='crew-navigation-list-item'>
            <Link
              to='2'
              className={`crew-navigation-list-item-link ${
                location.pathname === '/crew/2' ? 'active' : ''
              }`}
            />
          </li>

          <li className='crew-navigation-list-item'>
            <Link
              to='3'
              className={`crew-navigation-list-item-link ${
                location.pathname === '/crew/3' ? 'active' : ''
              }`}
            />
          </li>

          <li className='crew-navigation-list-item'>
            <Link
              to='4'
              className={`crew-navigation-list-item-link ${
                location.pathname === '/crew/4' ? 'active' : ''
              }`}
            />
          </li>
        </ul>
      </nav>

      <Outlet />
    </section>
  );
};

export default Crew;
