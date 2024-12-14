import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const [popularMenus, setPopularMenus] = useState([]);
  // console.log(popularMenus);

  useEffect(() => {
    axios.get('http://localhost:5000/menu').then((res) => {
      const popularItem = res.data.filter(
        (items) => items.category === 'popular'
      );
      setPopularMenus(popularItem);
    });
  }, [setPopularMenus]);
  return (
    <>
      <Marquee className=" w-full md:w-[90%]  " speed={50} pauseOnHover={stop}>
        <div className=" hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5  w-full md:mb-20 mt-5 ">
          {popularMenus.slice(0, 3).map((menu) => (
            <div key={menu._id} className="card bg-base-100 w-96 h-[500px] rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none  shadow-xl mx-auto">
              <figure className="relative ">
                <img
                  className="w-full rounded-tl-md rounded-tr-md "
                  src={menu.image}
                  alt="Shoes"
                />
              </figure>
              <div className="absolute w-full h-[256px] bg-black hover:opacity-45 transition-all duration-300 opacity-60 top-0 left-0 rounded-tl-md rounded-tr-md "></div>
              <h4 className=" z-20 absolute right-3 top-3 text-md text-white text-center font-bold  bg-orange-500 w-[80px] h-[50px] rounded-full p-3">
                ${menu.price}
              </h4>
              <div className=" card-body mb-2 hover:-translate-y-10  transition-all duration-700 z-30 bg-white w-[95%] mx-auto rounded-tr-3xl rounded-tl-3xl">
                <h2 className="card-title">{menu.name}</h2>
                <p>{menu.recipe}</p>
                <div className="card-actions justify-between">
                  <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov">
                    <Link className="">Add to cart</Link>
                  </div>
                  <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov">
                    <Link>Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      {/* Popular Menu For Mobile Device */}

      <div className=" grid md:hidden grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5  w-full md:mb-20 mt-5 ">
        {popularMenus.map((menu) => (
          <div className="card bg-base-100 w-96 h-[500px] rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none  shadow-xl mx-auto">
            <figure className="relative ">
              <img
                className="w-full rounded-tl-md rounded-tr-md "
                src={menu.image}
                alt="Shoes"
              />
            </figure>
            <div className="absolute w-full h-[256px] bg-black hover:opacity-45 transition-all duration-300 opacity-60 top-0 left-0 rounded-tl-md rounded-tr-md "></div>
            <h4 className=" z-20 absolute right-3 top-3 text-md text-white text-center font-bold  bg-orange-500 w-[80px] h-[50px] rounded-full p-3">
              ${menu.price}
            </h4>
            <div className=" card-body mb-2 hover:-translate-y-10  transition-all duration-700 z-30 bg-white w-[95%] mx-auto rounded-tr-3xl rounded-tl-3xl">
              <h2 className="card-title">{menu.name}</h2>
              <p>{menu.recipe}</p>
              <div className="card-actions justify-between">
                <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov">
                  <Link className="">Add to cart</Link>
                </div>
                <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov">
                  <Link>Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularMenu;
