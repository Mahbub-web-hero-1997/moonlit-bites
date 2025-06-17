import React, { useContext, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAxios from '../../CustomHook/UseAxios';
import UseAxiosPublic from '../../CustomHook/UseAxiosPublic';
import axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, setLoading, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const axiosSecure = UseAxios()
  const axiosPublic = UseAxiosPublic();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  { loading && <p className="text-center text-orange-500">Logging in...</p> }

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      axiosPublic.post("/user/login", userInfo)
        .then((res) => {
          if (res.data?.data?.user) {
            setUser(res.data.data.user);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Successful',
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          } else {
            Swal.fire('Login Failed', res.data?.message || 'Try again', 'error');
          }
        })
        .catch((err) => {
          Swal.fire('Login Failed', err.response?.data?.message || 'Try again', 'error');
        });

    } catch (err) {
      Swal.fire('Login Failed', err.response?.data?.message || 'Try again', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen md:h-[350px] md:w-1/4 mx-auto p-4 mt-16 shadow-lg ">
        <h1 className="text-2xl font-semibold text-center">Please Login</h1>
        <hr className="w-2/3 md:w-1/2  mx-auto mt-3 bg-orange-500" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-6"
          action=""
        >
          <input
            type="text"
            {...register('email', { required: true })}
            placeholder="example@gmail.com"
            className="border-b-[1px] border-orange-500 outline-none p-2"
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="text-red-600">email is required</span>
          )}
          <label className="w-full relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
              placeholder="Type Your Password"
              className="w-full border-b-[1px] border-orange-500 outline-none p-2  "
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2 right-0 cursor-pointer "
            >
              {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </label>
          {errors.password && (
            <span className="text-red-600">password is required</span>
          )}
          <input
            type="submit"
            value="Login"
            className="btn bg-orange-500 text-white text-xl hover:bg-white hover:text-orange-500 hover:border-orange-500"
          />
        </form>
        <div className="text-sm mt-3">
          Don't have an account?
          <Link to="/register" className="ml-2 text-blue-500">
            Register Here!
          </Link>
        </div>
        <SocialLogin />
      </div>
    </>
  );
};

export default Login;
