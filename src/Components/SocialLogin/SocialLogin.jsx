import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import UseAxiosPublic from '../../CustomHook/UseAxiosPublic';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext)
  const axiosPublic = UseAxiosPublic()
  const navigate=useNavigate()
 
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const userInfo = {
          name: result.user?.displayName,
          email:result.user?.email,
        }
        axiosPublic.post("/user", userInfo)
          .then(res => {
          console.log(res.data);          
        })
    })
   navigate('/')
  }
  
  return (
    <div className=" flex justify-center gap-3 mt-4 text-3xl">
      <FcGoogle onClick={handleGoogleLogin} className="cursor-pointer" />
      <FaFacebook className="text-sky-600 cursor-pointer" />
    </div>
  );
};

export default SocialLogin;
