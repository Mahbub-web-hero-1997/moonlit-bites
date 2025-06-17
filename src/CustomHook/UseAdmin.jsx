import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './UseAxiosPublic';

const UseAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const{user}=useContext(AuthContext)
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/admin/${user.email}`);
      // console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
