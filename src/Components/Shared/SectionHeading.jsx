import React from 'react';

const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className='w-full md:w-1/4 mx-auto text-center mt-5'>
            <p className='text-orange-500 font-xl'>{subHeading}</p>
            <h1 className='text-xl md:text-2xl font-semibold uppercase border-t border-b py-2 mt-2'>{ heading}</h1>
        </div>
    );
};

export default SectionHeading;