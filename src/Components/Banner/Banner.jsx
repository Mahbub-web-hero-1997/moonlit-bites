import React from 'react';
import video from "../../assets/banner/bg_video_2.mp4"

const Banner = () => {
    return (
        <div className='  relative w-[98%] mx-auto h-[calc(100vh-24px)] overflow-hidden px-5'>
            <video className='absolute left-0 top-0 h-full w-full object-cover -z-50'
                autoPlay
                loop
                muted
                
            >
                <source src={ video} type='video/mp4' />
            </video>
            <div className='w-full md:w-1/2 bg-slate-700'>
                <h1>This is This</h1>
           </div>
        </div>     

    );
};

export default Banner;