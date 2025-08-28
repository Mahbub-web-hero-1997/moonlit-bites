import { createContext, useEffect, useState } from 'react';
import UseAxiosPublic from '../CustomHook/UseAxiosPublic';
import Swal from 'sweetalert2';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  console.log(menus);
  const axiosPublic = UseAxiosPublic();

  //  Check user authentication
  const checkAuth = async () => {
    try {
      const res = await axiosPublic.get("/user/me");
      setUser(res.data?.data || null);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  const handleSignOut = () => {
    axiosPublic.post('/user/logout').then((res) => {
      if (res) {
        setUser(null);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logout Successful',
          showConfirmButton: false,
          timer: 1500,
        });

      }
    }
    ).catch((error) => {
      console.error('Logout failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong during logout!',
      });
    });
  };
  //  Fetch all menus
  useEffect(() => {
    axiosPublic.get('/menus/all').then((res) => {
      if (res.data?.data) setMenus(res.data?.data);
    });
  }, []);
  //  Filtered menus by category
  const fetchAndFilterMenus = async (category = null) => {
    const res = await axiosPublic.get('/menus/all');
    if (res.data?.data) {
      setMenus(
        category
          ? res.data.data.filter((item) => item.category === category)
          : res.data.data
      );
    }
  };

  //  Fetch all blogs
  useEffect(() => {
    axiosPublic.get('/blogs/all').then((res) => {
      if (res.data?.data) setBlogs(res.data.data);
    });
  }, []);
  useEffect(() => {
    axiosPublic.get('/reviews/all').then((res) => {
      if (res.data?.data) setReviews(res.data.data);
    });
  }, [])

  const AuthInfo = {
    user,
    loading,
    setUser,
    setLoading,
    menus,
    setMenus,
    blogs,
    reviews,
    setBlogs,
    handleSignOut,
    handleAllMenus: () => fetchAndFilterMenus(),
    handlePopularMenus: () => fetchAndFilterMenus('Popular'),
    handleSaladItems: () => fetchAndFilterMenus('Salad'),
    handlePizzaItems: () => fetchAndFilterMenus('Pizza'),
    handleDessertItems: () => fetchAndFilterMenus('Dessert'),
    handleDrinksItems: () => fetchAndFilterMenus('Drinks'),
    handleSoupItems: () => fetchAndFilterMenus('Soup'),
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
