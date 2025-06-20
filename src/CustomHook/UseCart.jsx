import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import AuthProvider, { AuthContext } from '../ContextAPI/AuthProvider';
import useAxiosPublic from './UseAxiosPublic';

const UseCart = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery(
        {
            queryKey: ["cart", user?.email],
            enabled: !!user?.email,
            queryFn: async () => {
                const res = await axiosPublic.get('/cart/getItem');
                console.log(res.data?.data?.items);
                console.log(res.data);
                return res.data?.data?.items || [];
            }
        }
    )
    return [cart, refetch]
};

export default UseCart;