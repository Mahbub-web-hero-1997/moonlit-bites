import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});
const UseAxios = () => {
  const { logOut } = useContext(AuthContext)
  const navigate=useNavigate()
  // Axios Interceptor Request
  axiosSecure.interceptors.request.use((config) => {
// console.log("Axios Intercept in AxiosSecure ");
    const token = localStorage.getItem("access-token")   
    config.headers.authorization= `Bearer ${token}`
    return config
    
  }, (err) => {
    return process.reject(err)
  })
  // Axios Interceptor Response
  axiosSecure.interceptors.response.use((response) => {
    return response
  }, async (err) => {
    const status = err.response.status;
    if (status === 401 || status === 403) {
      await logOut()
      navigate("/login")
    }
    return Promise.reject(status)
  })
  return axiosSecure;
};

export default UseAxios;
