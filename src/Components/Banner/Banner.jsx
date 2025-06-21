import React, { useContext } from 'react';
import video from '../../assets/banner/bg_video_3.mp4';
import shape from '../../assets/banner/shape.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';

const Banner = () => {
  const { menus } = useContext(AuthContext);

  return (
    <div className="relative w-full mx-auto h-[calc(100vh-24px)] overflow-hidden px-5 mb-10 select-none">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover -z-50 filter brightness-75"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 -z-40"></div>

      {/* Content Container */}
      <div className="w-full h-full flex justify-end items-center p-8 md:p-16 max-w-7xl mx-auto relative z-10">
        <Swiper
          className="text-white max-w-xl md:max-w-2xl"
          modules={[A11y, Autoplay]}
          autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
          spaceBetween={30}
          slidesPerView={1}
          speed={1200}
          loop
          a11y
        >
          {menus.slice(0, 6).map((menu) => (
            <SwiperSlide key={menu._id} className="transition-all duration-500">
              <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow-lg mb-6 leading-tight">
                {menu.name}
              </h1>
              <p className="text-lg md:text-xl max-w-md leading-relaxed tracking-wide text-gray-200 mb-8 drop-shadow">
                {menu.recipe.length > 350
                  ? menu.recipe.slice(0, 350) + '...'
                  : menu.recipe}
              </p>
              <div className="flex gap-6 mb-6">
                <p className="bg-orange-600 bg-opacity-80 px-5 py-2 rounded-lg text-lg font-semibold shadow-lg">
                  Price: <span className="text-white">${menu.price}</span>
                </p>
                <p className="bg-gray-800 bg-opacity-70 px-5 py-2 rounded-lg text-lg font-medium shadow-inner italic">
                  salt / mutton
                </p>
              </div>
              <Link
                to="#"
                className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-yellow-400 hover:to-orange-500 hover:scale-105 transition-transform duration-300"
              >
                Order Now
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative Shape */}
      <img
        className="w-full absolute bottom-0 left-0 opacity-80 pointer-events-none"
        src={shape}
        alt="decorative shape"
      />
    </div>
  );
};

export default Banner;
