import React from 'react';
import Header from './Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';

const Root = () => {
  return (
    <>
      <div className='bg-white text-black'>
        <Header />
        {<Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default Root;
