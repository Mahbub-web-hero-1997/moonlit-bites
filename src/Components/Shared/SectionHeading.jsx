import React from 'react';

const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className='w-full md:w-1/4 mx-auto text-center my-5 border-t border-b'>
            <p className='text-orange-500 font-xl mt-1'>{subHeading}</p>
            <h1 className='text-xl md:text-2xl font-semibold uppercase py-2'>{ heading}</h1>
        </div>
    );
};

export default SectionHeading;