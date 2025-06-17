import axios from 'axios';

const axiosSecurePublic = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
});

// ✅ This is just a normal utility function, not a React hook
const useAxiosPublic = () => axiosSecurePublic;

export default useAxiosPublic;
