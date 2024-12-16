import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import auth from '../firebase.config';
import UseAxiosPublic from '../CustomHook/UseAxiosPublic';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosSecurePublic = UseAxiosPublic();
  // console.log(user);
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email }
        axiosSecurePublic.post("/jwt", userInfo)
          .then(res => {
            localStorage.setItem("access-token", res.data.token)
            console.log(res.data.token);
            
        })
      }
      else {     
        localStorage.removeItem("access-token")
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/menu').then((res) => setMenus(res.data));
  }, []);

  const createUser = (email, password) => {
   loading;
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
   loading;
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    loading
    return signInWithPopup(auth, provider)
  }


  const logOut = () => {
   loading;
    return signOut(auth);
  };

  const updateUserProfile = (firstName,  url) => {
    return updateProfile(auth.currentUser, {
      displayName: firstName,
      photoURL:url
    })
  }

  const handleAllMenus = () => {
    axios.get('http://localhost:5000/menu').then((res) => {
      setMenus(res.data);
    });
  };
  const handlePopularMenus = () => {
    axios.get('http://localhost:5000/menu').then((res) => {
      const items = res.data.filter((item) => item.category === 'popular');
      setMenus(items);
    });
  };
  const handleSaladItems = () => {
    axios.get('http://localhost:5000/menu').then((res) => {
      const items = res.data.filter((item) => item.category === 'salad');
      setMenus(items);
    });
  };
  const handlePizzaItems = () => {
    axios.get('http://localhost:5000/menu').then((res) => {
      const items = res.data.filter((item) => item.category === 'pizza');
      setMenus(items);
    });
  };
  const handleDessertItems = () => {
    axios.get('http://localhost:5000/menu').then((res) => {
      const items = res.data.filter((item) => item.category === 'dessert');
      setMenus(items);
    });
  };
  const handleDrinksItems = () => {
    axios.get('http://localhost:5000/menu').then((res) => {
      const items = res.data.filter((item) => item.category === 'drinks');
      setMenus(items);
    });
  };
  const handleSoupItems = () => {
    axios.get('http://localhost:5000/menu').then((res) => {
      const items = res.data.filter((item) => item.category === 'soup');
      setMenus(items);
    });
  };

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
    googleLogin,
    user,
    logOut,
    updateUserProfile,
    setLoading,
    loading,

  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
