import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../CustomHook/UseAxiosPublic';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('fullName', data.name);
    formData.append('email', data.email);
    formData.append('avatar', data.photoUrl[0]); // assuming single file upload
    formData.append('password', data.password);
    formData.append('confirmPassword', data.confirmPassword);

    axiosPublic
      .post('/user/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire('Success', 'Registration completed!', 'success');
        reset();
        navigate('/login');
      })
      .catch((err) => {
        console.error(err.message);
        Swal.fire('Error', 'Registration failed', 'error');
      });
  };


  return (
    <div className="w-full h-screen md:h-[500px] md:w-1/3 mx-auto p-4 mt-18 shadow-lg ">
      <h1 className="text-2xl font-semibold text-center">Please Register!</h1>
      <hr className="w-2/3 md:w-1/2  mx-auto mt-3 bg-orange-500" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4"
        action=""
      >
        <input
          type="text"
          {...register('name')}
          placeholder="Enter Your Name"
          className="border-b-[1px] border-orange-500 outline-none p-2"
        />

        <input
          type="file"
          {...register('photoUrl')}
          className="w-full p-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 border-b-[1px] border-orange-500
             file:rounded-full file:border-0 file:text-sm file:font-semibold
             file:bg-orange-500 file:text-white hover:file:bg-orange-600
             transition duration-300 ease-in-out"
        />

        <input
          type="email"
          {...register('email')}
          placeholder="example@gmail.com"
          className="border-b-[1px] border-orange-500 outline-none p-2"
        />
        <label className="w-full relative">
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Type Your Password"
            className="w-full border-b-[1px] border-orange-500 outline-none p-2  "
          />
          {/* <span onClick={() => setShowPassword(!showPassword)} className='absolute top-2 right-0 cursor-pointer '>
                            {!showPassword? <FaRegEye />:<FaRegEyeSlash/>}                            
                        </span>    */}
        </label>
        <label className="w-full relative">
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('confirmPassword')}
            placeholder="Confirm Your Password"
            className="w-full border-b-[1px] border-orange-500 outline-none p-2  "
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-2 right-0 cursor-pointer "
          >
            {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </label>
        <input
          type="submit"
          value="Register"
          className="btn bg-orange-500 text-white text-xl hover:bg-white hover:text-orange-500 hover:border-orange-500"
        />
      </form>
      <div className="text-sm mt-3">
        Already have an account?
        <Link to="/login" className="ml-2 text-blue-500">
          Login Here!
        </Link>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Register;
