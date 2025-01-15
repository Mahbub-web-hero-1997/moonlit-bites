import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import PopularMenu from './PopularMenu';

const PopularMenus = () => {
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
          {popularMenus.map((menu) => <PopularMenu key={menu._id} menu={menu} /> )}
        </div>
      </Marquee>
    </>
  );
};

export default PopularMenus;
