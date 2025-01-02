import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SectionHeading from '../Shared/SectionHeading';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Opening from './Story';
import Story from './Story';
import Party from './Party';
import Expert from './Experte';
import PopularMenus from './PopularMenu/PopularMenus';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>moonlit || home</title>
      </Helmet>
      <div className="w-full mx-auto md:px-1 ">
        <Banner />
        <SectionHeading
          subHeading={'---From 9:00am to 9:00pm---'}
          heading={'Try our popular menu'}
        />
       <PopularMenus/>
        <Story />
        <Party />
        <Expert />
      </div>
    </>
  );
};

export default Home;
