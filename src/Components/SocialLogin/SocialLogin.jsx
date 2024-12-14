import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div className=" flex justify-center gap-3 mt-4 text-3xl">
      <FcGoogle className="cursor-pointer" />
      <FaFacebook className="text-sky-600 cursor-pointer" />
    </div>
  );
};

export default SocialLogin;
