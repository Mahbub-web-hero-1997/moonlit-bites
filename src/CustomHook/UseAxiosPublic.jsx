import axios from 'axios';

const axiosSecurePublic = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
});


const useAxiosPublic = () => axiosSecurePublic;

export default useAxiosPublic;
