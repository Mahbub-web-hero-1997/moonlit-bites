import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>moonlit || about</title>
      </Helmet>
      <div className="flex justify-center items-center h-[calc(100vh-95px)] bg-red-300">
        <h1 className="text-3xl font-bold text-center">
          Don't wary This Section is Coming Soon!!
        </h1>
      </div>
    </>
  );
};

export default About;
