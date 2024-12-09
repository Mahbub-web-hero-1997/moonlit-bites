import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Expert = () => {     
    const [experts, setExperts] = useState([])
    const url="http://localhost:5000/expert"
    useEffect(() => {
        axios(url)
        .then(res=>setExperts(res.data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-1 md:p-8 h-screen'>
            {
                experts.map(expert =>
                    
                    <div className=' w-full border-[1px] relative ]'>
                       
                            <img src={expert.img} alt="" className=' w-full md:h-1/2' />
                       
                        <div className='w-3/4 h-32 bg-white rounded-t-md p-3 mx-auto absolute bottom-[-90px]  md:bottom-[30%] left-[13%] border-b-[1px] mb-4'>
                            <h1 className='text-xl font-semibold text-center text-gray-600'>{expert.name}</h1>
                            <p className='w-1/2  rounded-full text-orange-500 text-xl text-center mx-auto mt-2 border-[1px] border-orange-500 p-1 '>{ expert.designation}</p>
                        </div>
                        <div className='mt-28 p-5'>
                            <p className='text-center text-gray-500'>{ expert.about}</p>
                        </div>

                    </div>

                )
            }
        </div>
    );
};

export default Expert;