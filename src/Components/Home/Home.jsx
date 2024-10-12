import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menus';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experts from '../Experts/Experts';
import useMenuForHome from '../../CustomHook/useMenuForHome';


const Home = () => {
    const menus = useMenuForHome()   
       
    return (
        <>
          <div className='w-full mx-auto no-scrollbar'>
                <Banner /> 
               <div className='grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5  w-full md:mb-20'>
                {
                   menus.slice(0,6).map((menu)=>(<div className="card bg-base-100 w-96 h-[450px] rounded-none shadow-xl mx-auto">
  <figure>
                <img
                    className='w-full'
      src={menu.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}            
    </h2>
                <p>{ menu.recipe}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>))
                }
        </div>
                <About />
                <Contact />
                <Experts/>
              
        </div>
        </>
    );
};

export default Home;