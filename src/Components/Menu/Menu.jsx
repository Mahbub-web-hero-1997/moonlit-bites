import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';



const Menu = ({ menu }) => {
    const { name, image, price, recipe } = menu;

    return (
        <div className="card bg-base-100 w-full h-[500px] rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none  shadow-xl mx-auto  ">
  <figure className='relative '>
          <img
                    className='w-full h-full rounded-tl-md rounded-tr-md '
      src={image}
      alt="Shoes" />
        </figure>       
        <div className='absolute w-full h-[250px] md:h-[272px] bg-black hover:opacity-45 transition-all duration-300 opacity-60 top-0 left-0 rounded-tl-md rounded-tr-md mb-1'> 
        </div>
        <h4 className=' z-20 absolute right-3 top-3 text-md text-white text-center font-bold  bg-orange-500 w-[80px] h-[50px] rounded-full p-3'>${price}</h4>
  <div className=" card-body mb-2 md:hover:-translate-y-10  transition-all duration-700 z-30 bg-white w-[95%] mx-auto rounded-tr-3xl rounded-tl-3xl">
    <h2 className="card-title">
      {name}            
    </h2>
                <p>{ recipe}</p>
    <div className="card-actions justify-between">
      <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov"><Link className=''>Add to cart</Link></div>
      <div className="badge hover:bg-orange-500 hover:text-white badge-outline border-orange-500 p-5 text-orange-500 font-semibold hov"><Link>Buy Now</Link></div>
    </div>
  </div>
</div>
    );
};

export default Menu;