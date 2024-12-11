import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Register = () => {
     const [showPassword, setShowPassword] = useState(false)
    console.log(showPassword);
    return (
         <div className='w-full h-screen md:h-[450px] md:w-1/3 mx-auto p-4 mt-14 shadow-lg '>
                <h1 className='text-2xl font-semibold text-center'>Please Register!</h1>
                <hr className='w-2/3 md:w-1/2  mx-auto mt-3 bg-orange-500' />
                <form onSubmit={()=>handleLogin()} className='flex flex-col gap-4 mt-6' action="">
                <div className='flex justify-between gap-1'>
                  <input type="text" name="firstName" id="firstName" placeholder='Enter Your First Name' className='border-b-[1px] border-orange-500 outline-none p-2' />  
                  <input type="text" name="lastName" id="lastName" placeholder='Enter Your Last Name' className='border-b-[1px] border-orange-500 outline-none p-2' />  
                </div>                
                    <input type="email" name="email" id="email" placeholder='example@gmail.com' className='border-b-[1px] border-orange-500 outline-none p-2' />                         
                 <label className='w-full relative'>
                        <input type={showPassword?"text":"password"} name="password" id="password" placeholder='Type Your Password' className='w-full border-b-[1px] border-orange-500 outline-none p-2  ' />
                        {/* <span onClick={() => setShowPassword(!showPassword)} className='absolute top-2 right-0 cursor-pointer '>
                            {!showPassword? <FaRegEye />:<FaRegEyeSlash/>}                            
                        </span>    */}
                    </label>           
                 <label className='w-full relative'>
                        <input type={showPassword?"text":"password"} name="confirmPassword" id="confirmPassword" placeholder='Confirm Your Password' className='w-full border-b-[1px] border-orange-500 outline-none p-2  ' />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute top-2 right-0 cursor-pointer '>
                            {!showPassword? <FaRegEye />:<FaRegEyeSlash/>}                            
                        </span>   
                </label>  
                <input type="submit" value="Register" className='btn bg-orange-500 text-white text-xl hover:bg-white hover:text-orange-500 hover:border-orange-500'/>
                </form>
                <div className='text-sm mt-3'>Already have an account?
                    <Link to="/login" className='ml-2 text-blue-500'>Login Here!</Link>
                </div>
                <SocialLogin/>
        </div>
    );
};

export default Register;