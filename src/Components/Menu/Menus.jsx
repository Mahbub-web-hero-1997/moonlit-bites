import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Menu from './Menu';
import MenuBanner from './MenuBanner';
import useMenu from '../../CustomHook/UseMenu';



const Menus = () => {
    const menus = useMenu()
    const { totalItems } = useLoaderData() 
    console.log(totalItems);
    
    const [menuPerPage, setMenuPerPage] = useState(10)
    const totalPages = Math.ceil(totalItems / menuPerPage)   
    const pages = [...Array(totalPages).keys()] 

    return (
        <>
            <MenuBanner/>       
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5  w-full md:mb-20 mt-20'>
                {
                   menus.slice(0,6).map((menu)=>(<Menu key={menu._id} menu={menu}/>))
                }
            </div>
            <div className='flex justify-center gap-4  w-1/2 text-center px-4 border  mx-auto -mt-12'>
                <button  className='font-semibold text-orange-500'>Prev</button>
                {
                    pages.map(page => <button className='btn  bg-orange-500 font-semibold text-white'>{ page}</button>)
                }
                <button className='font-semibold text-orange-500'>Next</button>
                <select name="" id="">
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </>
    );
};

export default Menus;