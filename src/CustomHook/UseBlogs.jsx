import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './UseAxiosPublic';


const useBlogs = () => {
    const axiosPublic = useAxiosPublic();

    const { data: blogs = [], isLoading, error, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs/all');
            return res.data?.data || [];
        },
    });

    return { blogs, isLoading, error, refetch };
};

export default useBlogs;
