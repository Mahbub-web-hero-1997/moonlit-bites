import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextAPI/AuthProvider';
const Category = () => { 
    const {
    handlePopularMenus,
      handleAllMenus,
      handleSaladItems,
      handlePizzaItems,
      handleDessertItems,
      handleDrinksItems,
      handleSoupItems,     
  }=useContext(AuthContext)
  
   
    return (
<>

         <div className='grid grid-cols-7 gap-20 p-4  border-y my-8 sticky top-16 left-12 z-50 bg-base-100 '>           
        < button onClick={()=>handleAllMenus()}  className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-10 h-10 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/k9RHBXB/salad-bg.jpg" alt="" />
                            <h1 className=''>All</h1>
                            </button> 
        < button  onClick={()=>handleSaladItems()} className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-10 h-10 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/k9RHBXB/salad-bg.jpg" alt="" />
                            <h1 className=''>Salad</h1>
                            </button> 
                            < button onClick={()=>handlePizzaItems()} to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-10 h-10 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/f9mTDGf/slide2.jpg" alt="" />
                            <h1 className=''>Pizza</h1>
                            </button> 
                            < button onClick={()=>handleDessertItems()} className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-10 h-10 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/VgF9TFd/slide4.jpg" alt="" />
                            <h1 className=''>Dessert</h1>
                            </button> 
                            < button onClick={()=>handlePopularMenus()} className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-10 h-10 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/8Y6vBWR/slide1.jpg" alt="" />
                            <h1 className=''>Popular</h1>
                            </button> 
                            < button onClick={()=>handleDrinksItems()} className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-10 h-10 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/KsMZps5/slide3.jpg" alt="" />
                            <h1 className=''>Drinks</h1>
                            </button> 
                            < button onClick={()=>handleSoupItems()} className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-10 h-10 rounded-full hover:scale-105 ' src="https://i.ibb.co.com/7ntTWNp/soup-bg.jpg" alt="" />
                            <h1 className=''>Soup</h1>
                            </button> 
        </div>       
                    
            </>
    );
};

export default Category;