import React from 'react';
import menuBanner from '../../assets/shop/banner2.jpg';

const MenuBanner = () => {
  return (
    <>
      <div className="relative h-80 md:h-[calc(100vh-120px)] w-full hidden md:block">
        <img className="w-full h-full object-cover" src={menuBanner} alt="" />
        <div className="absolute inset-0 bg-black opacity-60 flex flex-col items-center justify-center">
          <h1 className=" text-4xl md:text-6xl font-semibold text-white text-center">
            {' '}
            Our Best Menus
          </h1>
        </div>
      </div>
    </>
  );
};

export default MenuBanner;
