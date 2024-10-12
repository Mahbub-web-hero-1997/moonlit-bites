import React from 'react';
import UseCategory from '../../CustomHook/UseCategory';
import { ActiveLink } from 'react-router-dom';

const Category = () => {
    const categories = UseCategory() 
    console.log(categories);
    
    
    
    
    
    return (

        <div className='grid grid-cols-6 gap-20 p-4  border-y my-8'>           
         
            {
                categories.map((category) => (<>
                    <div >                      
                            <ActiveLink to="#" className=' flex flex-col justify-center items-center gap-x-10  hover:text-orange-500 text-xl font-semibold'><img className=' w-28 h-28 rounded-full hover:scale-105 ' src={category.image} alt="" />
                            <h1 className=''>{category.Name}</h1>
                            </ActiveLink>                     
                </div>
                </>))
            }
        </div>
    );
};

export default Category;