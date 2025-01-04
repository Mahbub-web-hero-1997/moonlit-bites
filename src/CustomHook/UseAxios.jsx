import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000', // Update baseURL as per your environment
});

const UseAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Axios Interceptor Request
   axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      // console.log(token);      
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // Axios Interceptor Response
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err?.response?.status;        
      if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
      
      }
      return Promise.reject(err); // Pass the entire error object
    }
  );

  return axiosSecure;
};

export default UseAxios;