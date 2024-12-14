import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className='flex w-full'>
            <div className='w-56 h-screen bg-orange-500'>
                <ul className='mt-3 text-white'>
                    <li className='text-center text-xl font-semibold '><NavLink to="/">MOONLIT-BITES</NavLink></li>
                </ul>
               
           </div>
            <div>
                {<Outlet/>}
           </div>
        </div>
    );
};

export default UserDashboard;