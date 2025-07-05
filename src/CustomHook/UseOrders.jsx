import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './UseAxiosPublic';

const UseOrders = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosPublic.get('/order/myOrder');
      return res.data.data;
    },
    enabled: true,
  });


  return [orders, refetch];
};

export default UseOrders;