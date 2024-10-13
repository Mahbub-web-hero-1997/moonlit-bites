import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menus, setMenus] = useState([])   
    useEffect(() => {         
    axios.get("http://localhost:5000/menu")
    .then(res=>setMenus(res.data))
    }, [])   
    
 
    const handlePopularMenus = () => {
        
        axios.get("http://localhost:5000/menu")
            .then(res => {
                const items = res.data.filter(item => item.category === 'popular')
                setMenus(items)
                settrue(!istrue)

                
    })
    
    // 
     
  }
   

    return []
};

export default useMenu;