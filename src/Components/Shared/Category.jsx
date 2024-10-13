import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useMenu from '../../CustomHook/UseMenu';
import axios from 'axios';
const Category = () => { 
    const [menus, setMenus, istrue, settrue,handlePopularMenus]=useMenu()
  
   
    return (
<>
         <div className='grid grid-cols-7 gap-20 p-4  border-y my-8 '>           
        < button onClick={()=>handlePopularMenus()}  to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-28 h-28 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/k9RHBXB/salad-bg.jpg" alt="" />
                            <h1 className=''>All</h1>
                            </button> 
        < button  to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-28 h-28 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/k9RHBXB/salad-bg.jpg" alt="" />
                            <h1 className=''>Salad</h1>
                            </button> 
                            < Link to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-28 h-28 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/f9mTDGf/slide2.jpg" alt="" />
                            <h1 className=''>Pizza</h1>
                            </Link> 
                            < Link to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-28 h-28 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/VgF9TFd/slide4.jpg" alt="" />
                            <h1 className=''>Dessert</h1>
                            </Link> 
                            < Link to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-28 h-28 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/8Y6vBWR/slide1.jpg" alt="" />
                            <h1 className=''>Popular</h1>
                            </Link> 
                            < Link to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-28 h-28 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/KsMZps5/slide3.jpg" alt="" />
                            <h1 className=''>Drinks</h1>
                            </Link> 
                            < Link to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-28 h-28 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/7ntTWNp/soup-bg.jpg" alt="" />
                            <h1 className=''>Soup</h1>
                            </Link> 
        </div>       
                    
            </>
    );
};

export default Category;