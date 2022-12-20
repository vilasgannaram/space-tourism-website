import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

const Root = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
