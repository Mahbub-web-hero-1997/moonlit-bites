import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  
    const [menus, setMenus] = useState([])
  
    useEffect(() => {         
    axios.get("http://localhost:5000/menu")
    .then(res=>setMenus(res.data))
    }, []) 
  
    const handleAllMenus = () => {
        
        axios.get("http://localhost:5000/menu")
            .then(res => {
                setMenus(res.data)                           
    })  

    }
    const handlePopularMenus = () => {
        
        axios.get("http://localhost:5000/menu")
            .then(res => {
                const items = res.data.filter(item => item.category === 'popular')
                setMenus(items)                            
    })  

    }
    const handleSaladItems = () => {
        
        axios.get("http://localhost:5000/menu")
            .then(res => {
                const items = res.data.filter(item => item.category === 'salad')
                setMenus(items)                            
    })  
    }
       const handlePizzaItems = () => {
        
        axios.get("http://localhost:5000/menu")
            .then(res => {
                const items = res.data.filter(item => item.category === 'pizza')
                setMenus(items)                            
    })  
    }
       const handleDessertItems = () => {
        
        axios.get("http://localhost:5000/menu")
            .then(res => {
                const items = res.data.filter(item => item.category === 'dessert')
                setMenus(items)                            
    })  
    }
       const handleDrinksItems = () => {
        axios.get("http://localhost:5000/menu")
            .then(res => {
                const items = res.data.filter(item => item.category === 'drinks')
                setMenus(items)                            
    })  
    }
       const handleSoupItems = () => {
        
        axios.get("http://localhost:5000/menu")
            .then(res => {
                const items = res.data.filter(item => item.category === 'soup')
                setMenus(items)                            
    })  
    }

    
  const AuthInfo = {
      handlePopularMenus,
      handleAllMenus,
      handleSaladItems,
      handlePizzaItems,
      handleDessertItems,
      handleDrinksItems,
      handleSoupItems,
      menus,
      
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
