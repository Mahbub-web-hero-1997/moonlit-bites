import { useQuery } from '@tanstack/react-query';
import UseAxios from './UseAxios';
import React from 'react';

const UseOrders = () => {
  const axiosSecure = UseAxios();
  const { refetch, data: booking = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosSecure.get('/booking');
      return res.data;
    },
  });

  return [booking, refetch];
};

export default UseOrders;