import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import useAxiosPublic from './UseAxiosPublic';

const UseCart = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { refetch, data: cartData = {} } = useQuery({
        enabled: !!user?.email, // important to prevent firing without a user
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get('/cart/getItem');
            return res.data?.data || {};
        },
    });
    

    return [cartData.items || [], refetch];
};

export default UseCart;
