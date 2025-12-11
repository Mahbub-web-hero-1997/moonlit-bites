import axios from 'axios';

const axiosSecurePublic = axios.create({
  baseURL: 'https://moonlitbite-server.onrender.com/api/v1',
  withCredentials: true,
});

const useAxiosPublic = () => axiosSecurePublic;

export default useAxiosPublic;
