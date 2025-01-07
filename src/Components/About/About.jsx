import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../Contact/Contact';

const About = () => {
  return (
    <>
      <Helmet>
        <title>moonlit || about</title>
      </Helmet>
     <Contact/>
    </>
  );
};

export default About;
