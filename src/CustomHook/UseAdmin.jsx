import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import UseAxios from './UseAxios';

const UseAdmin = () => {
    const axiosSecure = UseAxios();
    const{user}=useContext(AuthContext)
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
