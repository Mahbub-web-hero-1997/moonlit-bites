import React, { useEffect, useState } from 'react';
// import style from "../../Styles/Story.Module.css"
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import axios from 'axios';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
 

const Story = () => {
    const [stories, setStories] = useState([]) 
     const [selected, setSelected] = useState();
     useEffect(() => {
        axios.get("http://localhost:5000/Story")
        .then(res=>setStories(res.data))
    },[])
 
    return (
        <>
        <div className='w-full mx-aut flex flex-col md:flex-row gap-6 md:grid-cols-2 h-auto bg-[#F7F7F7] px-8 py-14'>
                <div className='w-full md:w-[60%] mt-2 '>
                    <h1 className='text-3xl md:text-4xl text-center md:text-left text-orange-500 mb-5 '>Our Story</h1>
                    {
                        stories.map(story=><div className='flex flex-col'>
                        <h2 className='text-xl md:text-3xl mb-4 md:mb-8'>{story.title}</h2>
                            <p className='mb-4 md:mb-8 leading-7 justify-self-auto'>{story.description}</p> 
                         <div className='flex justify-start mb-16 md:mb-0'>
                    <div className='flex items-center w-1/2 border-b-[1px] p-1'>
                            <IoMdCall className='text-4xl md:text-6xl text-orange-500 mx-3' />
                            <div className='w-full'>
                                <h4 className='text-xl font-semibold '>Phone</h4>
                                <p className='text-md'>{story.phone}</p>
                            </div>
                      </div>
                    <div className='flex items-center w-1/2 border-b-[1px] p-1 '>
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
                <div className='relative w-full md:w-[40%] p-2 shadow-xl bg-white rounded-sm  '>
                       <div className=' w-20 h-20 flex justify-center items-center absolute  rounded-full top-0 left-[40%] md:left-[42%] -mt-10 bg-white shadow-2xl border-[1px] border-orange-500 '>
                                    <GiForkKnifeSpoon className='text-4xl text-orange-500'/>
                    </div>
                    <h1 className='mt-12 text-center text-4xl mb-5'>Book A Table</h1>
                    <form className='flex flex-col items-center' action="">
                        <input className='w-full md:w-[95%] p-3 border-[1px] text-center outline-none rounded-sm mb-3' type="text" placeholder='Name Here' />
                        <input className='w-full md:w-[95%] p-3 border-[1px] text-center outline-none rounded-sm mb-3' type="email" placeholder='Example@gmail' />                       
                         <select  className='w-full md:w-[95%] p-3 border-[1px] text-center outline-none rounded-sm mb-3 text-gray-500' name="number" id="">
                            <option defaultValue="Person">Person</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            </select>                     
                        <input className='w-full md:w-[95%] p-3 border-[1px] text-center outline-none rounded-sm mb-3 text-gray-500' type="date" name="date" id="" />
                        <input type="submit" value="Book-NOW" className='w-full md:w-[95%] p-3 border-[1px] text-center outline-none rounded-sm mb-3 bg-orange-500 text-white cursor-pointer' />
                    </form>
                   
                </div>  
        </div>
        </>
    );
};

export default Story;