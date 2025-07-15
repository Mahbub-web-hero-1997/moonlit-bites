import axios from 'axios';

const axiosSecurePublic = axios.create({
  baseURL: 'https://moonlit-bite-server.vercel.app/api/v1',
  withCredentials: true,
});


const useAxiosPublic = () => axiosSecurePublic;

export default useAxiosPublic;
