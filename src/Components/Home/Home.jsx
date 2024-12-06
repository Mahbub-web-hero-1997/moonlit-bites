import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SectionHeading from '../Shared/SectionHeading';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Opening from './Opening';
import PopularMenu from './PopularMenu';




const Home = () => {
  
 
    return (
      <>
         <Helmet>
                <title>moonlit || home</title>
            </Helmet>
          <div className='w-full mx-auto '>
          <Banner /> 
          <SectionHeading subHeading={"---From 9:00am to 9:00pm---"} heading={"Try our popular menu"} />  
        <PopularMenu/>
              <Opening/>           
        </div>
        </>
    );
};

export default Home;