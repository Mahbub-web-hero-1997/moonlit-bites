import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import video from '../../assets/banner/bg_video_3.mp4';

const Banner = () => {
  const { menus } = useContext(AuthContext);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[calc(100vh-24px)] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[.8] z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/30 z-10"></div>

      {/* Slider Content */}
      <div className="relative z-20 flex items-center justify-center h-full max-w-7xl mx-auto px-5">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="fade"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 9000 }}
          pagination={{ clickable: true }}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 150, modifier: 2.5, slideShadows: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full max-w-4xl"
        >
          {menus?.slice(0, 6).map((menu, index) => (
            <SwiperSlide key={menu._id}>
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={menu._id}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{}}
                    className="bg-white/10 border border-white/30 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 text-white text-center space-y-6"
                  >
                    {/* Title - from top */}
                    <motion.h1
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text py-3"
                    >
                      {menu.name}
                    </motion.h1>

                    {/* Description - fade in (no typing) */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-sm md:text-base text-gray-200 max-w-xl mx-auto leading-relaxed"
                    >
                      {menu.recipe.length > 250
                        ? menu.recipe.slice(0, 250) + '...'
                        : menu.recipe}
                    </motion.p>

                    {/* Price & Category */}
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                      <motion.span
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow"
                      >
                        ${menu.price}
                      </motion.span>

                      <motion.span
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium border border-white/30 shadow-inner"
                      >
                        {menu.category} Item
                      </motion.span>
                    </div>

                    {/* Button - from bottom */}
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <Link
                        to={`/checkout/${menu._id}`}
                        className="inline-block px-8 py-3 mt-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Order Now
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
