import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experts from '../Experts/Experts';
import { Link } from 'react-router-dom';
import SectionHeading from '../Shared/SectionHeading';
import axios from 'axios';
import Category from '../Shared/Category';
import Marquee from 'react-fast-marquee';




const Home = () => {
  // const menus = useMenuForHome() 
  const [popularMenus, setPopularMenus] = useState([])  
  useEffect(() => {
    axios.get('http://localhost:5000/menu')
    .then(res => {
      const popularItem = res.data.filter(items => items.category === "popular")
      setPopularMenus(popularItem)      
  })
       
},[setPopularMenus])
    return (
        <>
          <div className='w-full mx-auto no-scrollbar'>
          <Banner /> 
          <SectionHeading subHeading={"---From 9:00am to 9:00pm---"} heading={"Try our popular menu"} />  
           <Marquee speed={20} >
           <div className='grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5  w-full md:mb-20 mt-5'>
                {
              popularMenus.slice(0, 3).map((menu) => (
                     <div className="card bg-base-100 w-96 h-[500px] rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none  shadow-xl mx-auto">
  <figure className='relative '>
          <img
                    className='w-full rounded-tl-md rounded-tr-md '
      src={menu.image}
      alt="Shoes" />
        </figure>       
        <div className='absolute w-full h-[256px] bg-black hover:opacity-45 transition-all duration-300 opacity-60 top-0 left-0 rounded-tl-md rounded-tr-md '> 
        </div>
        <h4 className=' z-20 absolute right-3 top-3 text-md text-white text-center font-bold  bg-orange-500 w-[80px] h-[50px] rounded-full p-3'>${menu.price}</h4>
  <div className=" card-body mb-2 hover:-translate-y-10  transition-all duration-700 z-30 bg-white w-[95%] mx-auto rounded-tr-3xl rounded-tl-3xl">
    <h2 className="card-title">
      {menu.name}            
    </h2>
                <p>{ menu.recipe}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline border-orange-500 p-5 text-orange-500 font-semibold"><Link>Add to cart</Link></div>
      <div className="badge badge-outline border-orange-500 p-5 text-orange-500 font-semibold"><Link>Buy Now</Link></div>
    </div>
  </div>
</div>
                   ))
                }
          </div>
             
            </Marquee>   
                <About />
                <Contact />
                <Experts/>
              
        </div>
        </>
    );
};

export default Home;