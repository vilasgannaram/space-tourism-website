import React from 'react';

import { Link } from 'react-router-dom';

import Navbar from './navbar';
import logo from './assets/logo.svg';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <figure className='logo'>
          <img src={logo} alt='logo' />
        </figure>
      </Link>

      <div className='thread'></div>

      <Navbar />
    </header>
  );
};

export default Header;
