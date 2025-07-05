import React from 'react';
import useAxiosPublic from './UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UseOrder = () => {
    const axiosPublic = useAxiosPublic();
    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const response = await axiosPublic.get('/orders/all');
            return response.data;
        }
    })
    return [orders, refetch, isLoading];
};

export default UseOrder;