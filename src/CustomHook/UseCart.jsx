import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxios from './UseAxios';

const UseCart = () => {
    const axiosSecure=UseAxios()
    const { data: cart = [] } = useQuery(
        {
            queryKey: ["cart"],
            queryFn: async () => {
                const res=axiosSecure("/cart")
            }
        }
    )
   return[cart]
};

export default UseCart;