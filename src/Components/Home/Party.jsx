import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../Shared/SectionHeading';

const Party = () => {
    const [parties, setParties] = useState([])
    useEffect(() => {
        const url="http://localhost:5000/party"
        axios.get(url)
        .then(res=>setParties(res.data))
    },[])
    
    return (
        <>
            <SectionHeading heading={"Party"} /> 
            <Swiper
        className="w-full h-[230px] md:h-[420px] rounded-sm bg-gray-200 mt-5"
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        // autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        slidesPerView={1}
        speed={2000}
            >
                {
                    parties.map(party =>
                    <SwiperSlide>
                            <div className='flex flex-col md:flex-row w-[96%] h-full'>
                                <div className='relative w-full md:w-[45%] h-full'>
                                <img className='w-full h-full' src={party.img} alt="" />
                                    <div className='w-24 h-24 rounded-full bg-white shadow-inner absolute top-[180px] right-[140px] md:top-[20%] md:right-[-44px] '>
                                    <p className='text-xl font-semibold text-orange-500 text-center mt-3'>Price</p>
                                    <p className='text-xl text-center font-serif'>${ party.price}</p>
                                </div>
                            </div>
                          </div>
                    </SwiperSlide>)
               }
            </Swiper>
        
        
        </>
    );
};

export default Party;