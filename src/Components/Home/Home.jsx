import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experts from '../Experts/Experts';


const Home = () => {
    return (
        <>
          <div className='w-full mx-auto no-scrollbar'>
                <Banner /> 
                <Menu />
                <About />
                <Contact />
                <Experts/>
              
        </div>
        </>
    );
};

export default Home;