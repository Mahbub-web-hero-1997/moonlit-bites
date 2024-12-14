import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import UseAxios from './UseAxios';
import AuthProvider, { AuthContext } from '../ContextAPI/AuthProvider';

const UseCart = () => {
    const axiosSecure = UseAxios()
    const {user}=useContext(AuthContext)
    const { refetch, data: cart = [] } = useQuery(
        {
            queryKey: ["cart", user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/cart?email=${user.email}`)
                console.log(res.data);
                return res.data;
                
            }
        }
    )
   return [cart, refetch]
};

export default UseCart;