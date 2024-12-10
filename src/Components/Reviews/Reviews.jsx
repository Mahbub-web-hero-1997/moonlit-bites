import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SectionHeading from '../Shared/SectionHeading';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url="http://localhost:5000/review"
        axios(url)
        .then(res=>setReviews(res.data))
    },[])
    
    return (
        <>
            <SectionHeading heading={"Testimonials"} subHeading={"Reviews"}/>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0'>
                {
                    reviews.map(review => <Review review={ review} key={review._id} />)
               } 
        </div>
        </>
    );
};

export default Reviews;