import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Menu from '../Components/Menu/Menus';
import Blogs from '../Components/Blogs/Blogs';
import Experts from '../Components/Experts/Experts';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Root from '../Components/Root';
import Review from '../Components/Reviews/Reviews';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from './PrivateRoute';
import Cart from '../Components/Dashboard/UserDashboard/Cart';
import UserHome from '../Components/Dashboard/UserDashboard/UserHome';
import Order from '../Components/Dashboard/UserDashboard/UserOrder';
import UserOrder from '../Components/Dashboard/UserDashboard/UserOrder';
import UserPayment from '../Components/Dashboard/UserDashboard/UserPayment';
import UserReview from '../Components/Dashboard/UserDashboard/UserReview';
import Dashboard from '../Components/Dashboard/UserDashboard/Dashboard';
import AllUsers from '../Components/Dashboard/AllUsers/AllUsers';
import AdminRoute from './AdminRoute';
import Items from '../Components/Dashboard/AddItems/Items';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: () => fetch('http://localhost:5000/pagination'),
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/experts',
        element: <Experts />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/review',
        element: <Review />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <AdminRoute>
        <Dashboard></Dashboard>
      </AdminRoute>
    ),
    children: [
      {
        path: '/dashboard/allUsers',
        element: <AllUsers />,
      },
      {
        path: '/dashboard/cart',
        element: <Cart />,
      },
      {
        path: '/dashboard/userHome',
        element: <UserHome />,
      },
      {
        path: '/dashboard/userOrder',
        element: <UserOrder />,
      },
      {
        path: '/dashboard/userPayment',
        element: <UserPayment />,
      },
      {
        path: '/dashboard/userReview',
        element: <UserReview />,
      },
      {
        path: "/dashboard/addItems",
        element:<Items/>
      }
    ],
  },
]);
