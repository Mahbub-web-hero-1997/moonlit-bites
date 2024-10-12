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
                <About />
                <Contact />
                <Experts/>
              
        </div>
        </>
    );
};

export default Home;