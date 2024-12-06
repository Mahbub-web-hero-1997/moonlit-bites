import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Menu from './Menu';
import MenuBanner from './MenuBanner';
import SectionHeading from '../Shared/SectionHeading';
import Category from '../Shared/Category';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { Helmet } from 'react-helmet-async';





const Menus = () => {
    const { menus } = useContext(AuthContext)  
    console.log(menus);
    
    const { totalItems } = useLoaderData() 
    const [menuPerPage, setMenuPerPage] = useState(10)
    const totalPages = Math.ceil(totalItems / menuPerPage)   
    const pages = [...Array(totalPages).keys()] 

    return (
        <>
            <Helmet>
                <title>moonlit || menu</title>
            </Helmet>
            <MenuBanner />              
            <SectionHeading subHeading={"---From 9:00am to 9:00pm---"} heading={"Try our best menu"} />
            <Category/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5  w-full md:mb-20 mt-5 '>
                {
                   menus.slice(0,6).map((menu)=>(<Menu key={menu._id} menu={menu}/>))
                }
            </div>
            <div className='flex justify-center gap-4  w-1/2 text-center px-4 border  mx-auto -mt-12'>
                <button  className='font-semibold text-orange-500'>Prev</button>
                {
                    pages.map(page => <button key={page._id} className='btn  bg-orange-500 font-semibold text-white'>{ page}</button>)
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