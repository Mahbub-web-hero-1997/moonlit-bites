import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Menu from './Menu';



const Menus = () => {
    const [menus, setMenus] = useState([])
    console.log(menus);
    
    useEffect(() => {
         
    axios.get("http://localhost:5000/menu")
    .then(res=>setMenus(res.data))
   },[])
    
    return (
        <>
        <h1 className=' text-3xl font-bold'>{menus.length}</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5  w-full md:mb-20'>
                {
                   menus.slice(0,6).map((menu)=>(<Menu key={menu._id} menu={menu}/>))
                }
        </div>
        </>
    );
};

export default Menus;