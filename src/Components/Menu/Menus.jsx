import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Menu from './Menu';
import MenuBanner from './MenuBanner';
import SectionHeading from '../Shared/SectionHeading';
import Category from '../Shared/Category';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Menus = () => {
  const { menus } = useContext(AuthContext);
  console.log(menus);


  const handleConfirmOrder = (id) => {
    console.log(id);
  };

  return (
    <>
      <Helmet>
        <title>moonlit || menu</title>
      </Helmet>
      {/* <MenuBanner /> */}
      {/* <SectionHeading
        subHeading={'---From 9:00am to 9:00pm---'}
        heading={'Try our best menu'}
      /> */}
      <Category />
      <div
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-5 w-full md:w-[100%] mx-auto md:mb-20 mt-5"
      >
        {menus.map((menu, idx) => (
          <Menu
            key={menu._id}
            menu={menu}
            handleConfirmOrder={handleConfirmOrder}
          />
        ))}
      </div>

    </>
  );
};

export default Menus;
