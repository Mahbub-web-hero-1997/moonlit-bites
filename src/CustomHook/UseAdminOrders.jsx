import React from 'react';
import useAxiosPublic from './UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UseAdminOrders = () => {
    const axiosPublic = useAxiosPublic();
    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ["orders"]
        , queryFn: async () => {
            const res = await axiosPublic.get('/order/all');
            return res.data.data;
        },
    })
    return [orders, refetch, isLoading];
}

export default UseAdminOrders;