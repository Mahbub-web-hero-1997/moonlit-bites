import axios from 'axios';
import React from 'react';

const axiosSecurePublic = axios.create({
  baseURL: 'https://y-gamma-lyart.vercel.app',
});
const UseAxiosPublic = () => {
  return axiosSecurePublic;
};

export default UseAxiosPublic;
