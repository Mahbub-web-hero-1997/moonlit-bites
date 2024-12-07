import React, { useEffect, useState } from 'react';
import style from "../../Styles/Story.module.css"
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import axios from 'axios';
 

const Story = () => {
    const [stories, setStories]=useState([]) 
     useEffect(() => {
        axios.get("http://localhost:5000/Story")
        .then(res=>setStories(res.data))
    },[])
 
    return (
        <>
        <div className='w-full mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 h-auto bg-[#F7F7F7] px-8 py-14'>
                <div className='w-full mt-2'>
                    <h1 className='text-3xl md:text-4xl text-center md:text-left text-orange-500 mb-5'>Our Story</h1>
                    {
                        stories.map(story=><div className='flex flex-col'>
                        <h2 className='text-xl md:text-3xl mb-4 md:mb-8'>{story.title}</h2>
                            <p className='mb-4 md:mb-8 leading-7'>{story.description}</p> 
                         <div className='flex justify-start mb-16'>
                    <div className='flex items-center w-1/2 border-r-[1px] p-1'>
                            <IoMdCall className='text-4xl md:text-6xl text-orange-500 mx-3' />
                            <div className='w-full'>
                                <h4 className='text-xl font-semibold '>Phone</h4>
                                <p className='text-md'>{story.phone}</p>
                            </div>
                      </div>
                    <div className='flex items-center w-1/2 border-l-[1px] p-1'>
                            <MdEmail className='text-4xl md:text-6xl text-orange-500 mx-3' />
                            <div className='w-full'>
                                <h4 className='text-xl font-semibold '>Phone</h4>
                                <p className='text-md'>{story.email}</p>
                            </div>
                      </div>
                 
                    </div>    
                        </div>)
                        
                    }
                   
                </div>  
                <div className='relative p-2 shadow-xl bg-white'>
                       <div className=' w-20 h-20 flex justify-center items-center absolute  rounded-full top-0 left-[40%] md:left-[45%] -mt-10 bg-white shadow-2xl border-[1px] border-orange-500 '>
                                    <GiForkKnifeSpoon className='text-4xl text-orange-500'/>
                        </div>        
                   
                </div>  
        </div>
        </>
    );
};

export default Story;