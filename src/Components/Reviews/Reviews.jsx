import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SectionHeading from '../Shared/SectionHeading';
import Review from './Review';
import { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Reviews = () => {

  const { reviews } = useContext(AuthContext)
  console.log(reviews);

  return (

    <>
      <Helmet>
        <title>moonlit || review</title>
      </Helmet>
      <SectionHeading heading={'Testimonials'} subHeading={'Reviews'} />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review review={review} key={review._id} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
