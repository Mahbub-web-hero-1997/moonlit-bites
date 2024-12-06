import React, { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import style from "../../Styles/Story.module.css"
import { MdCallEnd } from "react-icons/md";
 

const Story = () => {
    const { stories } = useContext(AuthContext)
   
 
    return (
        <>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 h-screen bg-lime-100'>
                <div className='w-full h-full mt-5'>
                    <h1 className='text-3xl md:text-4xl text-center md:text-left text-orange-500'>Our Story</h1>
                    {
                        stories.map(story=><div className='flex flex-col'>
                        <h2 className='text-xl md:text-3xl'>{stories[0].title}</h2>
                        <p>{stories[0].description}</p>                      
                    </div>)
                    }
                </div>  
              <div></div>  
        </div>
        </>
    );
};

export default Story;