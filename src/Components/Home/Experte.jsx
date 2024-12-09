import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Expert = () => {     
    const [experts, setExperts] = useState([])
    const url="http://localhost:5000/expert"
    useEffect(() => {
        axios(url)
        .then(res=>setExperts(res.data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-1 md:p-8 h-screen  '>
            {
                experts.map(expert =>
                    
                    <div className=' w-full border-[1px] md:relative'>
                       
                            <img src={expert.img} alt="" className=' w-full md:h-1/2' />
                       
                        <div className='w-3/4 md:h-32 bg-white rounded-t-md p-3 mx-auto md:absolute 
                          md:bottom-[30%] left-[13%] border-b-[1px] md:mb-4'>
                            <h1 className='text-xl font-semibold text-center text-gray-500'>{expert.name}</h1>
                            <p className='w-1/2  rounded-full text-orange-500 text-xl text-center mx-auto mt-2 border-[1px] border-orange-500 p-1 '>{ expert.designation}</p>
                        </div>
                        <div className='md:mt-28 p-5'>
                            <p className='text-center text-gray-500'>{expert.about}</p>
                            <div className='w-full md:w-1/2 flex justify-center items-center gap-4 mx-auto mt-8'>
                                <Link to="#"><TiSocialFacebook className='text-2xl text-sky-600' /></Link>
                                <Link to="#"><FaTwitter className='text-xl text-sky-400' /></Link>
                                <Link to="#"><FaLinkedinIn className='text-xl text-sky-500' /></Link>                               
                            </div>
                        </div>

                    </div>

                )
            }
        </div>
    );
};

export default Expert;