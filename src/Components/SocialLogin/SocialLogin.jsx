import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import UseAxios from '../../CustomHook/UseAxios';


const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext)
  const axiosSecure = UseAxios()
  const navigate=useNavigate()
 
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const userInfo = {
          name: result.user?.displayName,
          email:result.user?.email,
        }
        axiosSecure.post("/user", userInfo)
          .then(res => {
            if (res.data) {
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Welcome! You Successfully LoggedIn',
             showConfirmButton: false,
             timer: 1500,
           });
         }        
        })
    })
  //  navigate('/')
  }
  
  return (
    <div className=" flex justify-center gap-3 mt-4 text-3xl">
      <FcGoogle onClick={handleGoogleLogin} className="cursor-pointer" />
      <FaFacebook className="text-sky-600 cursor-pointer" />
    </div>
  );
};

export default SocialLogin;
