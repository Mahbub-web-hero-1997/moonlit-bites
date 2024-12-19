import { useContext } from "react";
import { AuthContext } from "../ContextAPI/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";


const UseAdmin = () => {
    const axiosSecure = UseAxios();
    const { user } = useContext(AuthContext)
    // console.log(user);
    
    const { data:isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            // console.log(res.data);
            
            return res.data?.admin
        },       
        
    })
    return [isAdmin]
};

export default UseAdmin;