import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import hamburger from '../assets/hamburger.svg';
import close from '../assets/close.svg';
import './navbar.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className='primary-navigation'>
      <figure onClick={handleShowMenu} className='icon'>
        <img
          src={!showMenu ? hamburger : close}
          alt={!showMenu ? 'hamburger' : 'close'}
        />
      </figure>

      {/* only for mobile */}
      {showMenu && <div className='list-wrapper'></div>}

      <ul className={`list ${showMenu ? 'mobile-nav' : ''}`}>
        <li onClick={() => setShowMenu(false)} className='list-item'>
          <NavLink to='/' className='link'>
            <span className='number'>00</span> Home
          </NavLink>
        </li>

        <li onClick={() => setShowMenu(false)} className='list-item'>
          <NavLink to='destination' className='link'>
            <span className='number'>01</span> Destination
          </NavLink>
        </li>

        <li onClick={() => setShowMenu(false)} className='list-item'>
          <NavLink to='crew' className='link'>
            <span className='number'>02</span> Crew
          </NavLink>
        </li>

        <li onClick={() => setShowMenu(false)} className='list-item'>
          <NavLink to='technology' className='link'>
            <span className='number'>03</span> Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
