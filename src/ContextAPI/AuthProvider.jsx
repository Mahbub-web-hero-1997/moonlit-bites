import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {  
    const [menus, setMenus] = useState([])
    const [loading, setLoading]=useState(true)
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        const unSubscribe= onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    },[])
  
    useEffect(() => {         
    axios.get("http://localhost:5000/menu")
    .then(res=>setMenus(res.data))
    }, []) 

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
  
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
      createUser,
      login,
      
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
