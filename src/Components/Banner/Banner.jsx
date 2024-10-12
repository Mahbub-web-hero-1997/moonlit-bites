import React, { useEffect } from 'react';
import video from "../../assets/banner/bg_video_2.mp4"
import useMenu from '../../CustomHook/UseMenu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const Banner = () => {
    const menus = useMenu()
    useEffect(() => {
       
      Aos.init();
  
    },[])
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
            <div className='w-2/3 h-full flex justify-end items-center'>
                         <Swiper
                className= ' text-white  '
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
                    menus.slice(0, 6).map((menu) => (<SwiperSlide className='ml-10'>
                        <h1 className='text-2xl md:text-6xl font-semibold'>{menu.name}</h1>
                            <p className=' w-86 leading-[2] tracking-widest text-xl p-2'>{menu.recipe}</p>
                        <div data-aos='fade-left' className='flex mt-3'>
                            <p className='w-1/5 text-xl border border-gray-500 p-2'>Price: ${menu.price}</p>
                            <p className='w-1/5 text-xl border border-gray-500 p-2'>Price: ${menu.price}</p>
                        </div>
                        <Link to="#" className='w-[150px] mt-4 rounded-md  text-center text-orange-500 font-semibold px-6 py-3 block border border-gray-500 hover:bg-orange-600 hover:text-white'>Order-Now</Link>
                    </SwiperSlide>))
      }
              
    </Swiper>
   </div>
        </div>     

    );
};

export default Banner;