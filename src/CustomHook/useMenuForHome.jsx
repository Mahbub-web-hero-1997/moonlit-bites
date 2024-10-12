import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useMenuForHome = () => {
    const [menus, setMenus] = useState([])
  
    useEffect(() => {
         
    axios.get("http://localhost:5000/menu")
    .then(res=>setMenus(res.data))
   },[])
    return menus
};

export default useMenuForHome;