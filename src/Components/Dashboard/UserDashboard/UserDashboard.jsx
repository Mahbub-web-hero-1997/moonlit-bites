import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCartPlus, FaFirstOrder, FaHome } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const UserDashboard = () => {
    return (
        <div className='flex w-full bg-gray-100'>
            <div className='w-56 h-screen bg-orange-500 px-2 md:sticky top-0 left-0'>
                <ul className='mt-3 text-white uppercase'>
                    <li className='text-center text-xl font-semibold '><NavLink to="/">MOONLIT-BITES</NavLink></li>
                   <hr className='w-full md:w-3/4 mx-auto my-3' />
                    <li className='text-center text-md font-semibold flex items-center gap-2 '><FaHome /> <NavLink to="/dashboard/userHome">User Home</NavLink></li>
                    <li className='text-center text-md font-semibold flex items-center gap-2 mt-3 '><FaCartPlus /><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                    <li className='text-center text-md font-semibold flex items-center gap-2 mt-3 '><FaFirstOrder /><NavLink to="/dashboard/userOrder">My Order</NavLink></li>
                    <li className='text-center text-md font-semibold flex items-center gap-2 mt-3 '><FaCartPlus /><NavLink to="/dashboard/userPayment">Payment History</NavLink></li>
                    <li className='text-center text-md font-semibold flex items-center gap-2 mt-3 '><IoIosStar /><NavLink to="/dashboard/userReview">Add Review</NavLink></li>
                </ul>
               
           </div>
            <div className='w-full'>
                {<Outlet/>}
           </div>
        </div>
    );
};

export default UserDashboard;