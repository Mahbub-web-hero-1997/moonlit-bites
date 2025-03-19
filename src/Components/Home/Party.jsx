import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../Shared/SectionHeading';

const Party = () => {
  const [parties, setParties] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:5000/party';
    axios.get(url).then((res) => setParties(res.data));
  }, []);

  return (
    <>
      <SectionHeading heading={'Party'} subHeading={'Enjoy With Your Family'} />
      <Swiper
        className="w-full h-auto md:h-[497px] rounded-sm bg-gray-200 my-5 mx-auto "
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        slidesPerView={1}
        speed={2000}
      >
        {parties.map((party) => (
          <SwiperSlide key={party._id}>
            <div className="flex flex-col md:flex-row w-full mx-auto ">
              <div className="relative w-full md:w-[45%] ">
                <img className="w-full h-[100%]" src={party.img} alt="" />
                <div className="w-24 h-24 rounded-full bg-white shadow-inner absolute top-[185px] right-[140px] md:top-[20%] md:right-[-44px] ">
                  <p className="text-xl font-semibold text-orange-500 text-center mt-3">
                    Price
                  </p>
                  <p className="text-xl text-center font-serif">
                    ${party.price}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[55%] md:ml-16 p-5">
                {/* <h1>Special Offer</h1> */}
                <div className="mt-4 ">
                  <h1 className="text-4xl font-semibold mb-5 mt-10 md:mt-0 text-center md:text-left">
                    {party.title}
                  </h1>
                  <hr className="w-full md:w-2/3 border-1 border-orange-500 mb-5" />
                  <p className="text-md text-gray-600 mb-5">{party.items}</p>
                  <p className="text-gray-600 mb-6 text-justify ">
                    {party.description}
                  </p>
                  <button className="btn w-full md:w-[200px] bg-orange-500 hover:bg-gray-100 hover:text-orange-500 hover:border-1 hover:border-orange-500 text-white ">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Party;
