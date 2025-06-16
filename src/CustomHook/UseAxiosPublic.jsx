import axios from 'axios';
import React from 'react';

const axiosSecurePublic = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});
const UseAxiosPublic = () => {
  return axiosSecurePublic;
};

export default UseAxiosPublic;


