import React from 'react';

const Review = ({ review }) => {
    const { name, img, details, rating } = review 
    
    
    return (
        <div className='border-r-[1px] border-orange-500 p-2 shadow-sm hover:shadow-none transition-all mt-5 pb-10'>
            <img className='w-20 h-20 rounded-full mx-auto' src={img} alt="" />
            <h2 className='text-xl font-semibold text-center mt-2 text-orange-500'>{name}</h2>  
            <p className='text-center my-3'> Rating: { rating}</p>          
            <p className=''>{ details}</p>
        </div>
    );
};

export default Review;