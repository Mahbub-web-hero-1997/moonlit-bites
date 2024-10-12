import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Menu from './Menu';
import MenuBanner from './MenuBanner';
import useMenu from '../../CustomHook/UseMenu';



const Menus = () => {
    const menus = useMenu()
    return (
        <>
            <MenuBanner/>       
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5  w-full md:mb-20 mt-20'>
                {
                   menus.slice(0,6).map((menu)=>(<Menu key={menu._id} menu={menu}/>))
                }
        </div>
        </>
    );
};

export default Menus;