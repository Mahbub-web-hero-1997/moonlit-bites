import React from 'react';
import Header from './Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';

const Root = () => {
  return (
    <div>
      <Header />
      {<Outlet />}
      {/* <Footer/> */}
    </div>
  );
};

export default Root;
