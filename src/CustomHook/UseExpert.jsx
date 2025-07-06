import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './UseAxiosPublic';
const UseExpert = () => {
    const axiosPublic = useAxiosPublic()


    const { data: experts = [], refetch, isLoading } = useQuery({
        queryKey: ["experts"],
        queryFn: async () => {
            const res = await axiosPublic.get("/expert/all");
            return res.data?.data || []
        }
    })
    return [experts, refetch, isLoading]
};

export default UseExpert;