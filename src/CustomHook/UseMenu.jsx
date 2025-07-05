import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './UseAxiosPublic';

const UseMenu = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allItems = [], refetch, isLoading } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menus/all');
            return res.data?.data || [];
        },
    });

    return [allItems, refetch, isLoading];
};

export default UseMenu;