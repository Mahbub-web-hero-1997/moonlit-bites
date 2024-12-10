import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SectionHeading from '../Shared/SectionHeading';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url="http://localhost:5000/review"
        axios(url)
        .then(res=>setReviews(res.data))
    },[])
    
    return (
        <>
            <SectionHeading heading={"Testimonials"} subHeading={"Reviews"}/>
            <div>
                
        </div>
        </>
    );
};

export default Review;