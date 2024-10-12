import React from 'react';
import video from "../../assets/banner/bg_video_2.mp4"
import useMenu from '../../CustomHook/UseMenu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const Banner = () => {
    const menus=useMenu()
    return (
        <div className='  relative w-[98%] mx-auto h-[calc(100vh-24px)] overflow-hidden px-5'>
            <video className='absolute left-0 top-0 h-full w-full object-cover -z-50'
                autoPlay
                loop
                muted
                
            >
                <source src={ video} type='video/mp4' />
            </video>
            <div className='w-full  bg-gradient-to-r from-black to-gray-900 inset-0 absolute opacity-50 -z-20'>
               
            </div>
            <Swiper
                className= 'h-1/2 text-white'
      // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                Autoplay
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
                scrollbar={{ draggable: true }} 
      fadeEffect={'fadeIn'}          
    >
     {
                    menus.slice(0, 6).map((menu) => (<SwiperSlide>
                        <h1 className='text-3xl'>{ menu.name}</h1>
                    </SwiperSlide>))
      }
              
    </Swiper>
        </div>     

    );
};

export default Banner;