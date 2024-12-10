import React, { useState } from 'react';
import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    console.log(showPassword);
    
    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <>        
        <div className='w-full h-screen md:h-[350px] border-2 md:w-1/4 mx-auto p-4 mt-16 '>
                <h1 className='text-2xl font-semibold text-center'>Please Login</h1>
                <hr className='w-2/3 md:w-1/2  mx-auto mt-3 bg-orange-500' />
                <form onSubmit={()=>handleLogin()} className='flex flex-col gap-4 mt-6' action="">
                    <input type="text" name="email" id="email" placeholder='example@gmail.com' className='border-b-[1px] border-orange-500 outline-none p-2' />                         
                 <label className='w-full relative'>
                        <input type={showPassword?"text":"password"} name="password" id="password" placeholder='Type Your Password' className='w-full border-b-[1px] border-orange-500 outline-none p-2  ' />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute top-2 right-0 cursor-pointer '>
                            {!showPassword? <FaRegEye />:<FaRegEyeSlash/>}                            
                        </span>   
                    </label>            
                </form>
        </div>
        </>
    );
};

export default Login;