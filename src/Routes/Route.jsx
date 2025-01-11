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
import Order from '../Components/Dashboard/UserDashboard/UserOrder/UserOrders';
import UserOrder from '../Components/Dashboard/UserDashboard/UserOrder/UserOrders';
import UserPayment from '../Components/Dashboard/UserDashboard/UserPayment';
import UserReview from '../Components/Dashboard/UserDashboard/UserReview';
import Dashboard from '../Components/Dashboard/UserDashboard/Dashboard';
import AllUsers from '../Components/Dashboard/AllUsers/AllUsers';
import AdminRoute from './AdminRoute';
import AddItems from '../Components/Dashboard/AddItems/AddItems';
import GetItems from '../Components/Dashboard/GetAllItems/GetItems';
import ManageItems from '../Components/Dashboard/ManageItems/ManageItems';
import UserBlogs from '../Components/Dashboard/UserDashboard/Blogs/AddBlogs';
import Checkout from '../Components/CheckOut/Checkout';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import AllOrders from '../Components/Dashboard/AllOrders/AllOrders';

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
        loader: () => fetch('https://y-gamma-lyart.vercel.app/pagination'),
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
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://y-gamma-lyart.vercel.app/menu/${params.id}`),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'allUsers',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: 'addItems',
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: 'allItems',
        element: (
          <AdminRoute>
            <GetItems />
          </AdminRoute>
        ),
      },
      {
        path: 'allOrder',
        element: (
          <AdminRoute>
          <AllOrders/>
          </AdminRoute>
        ),
      },
      {
        path: 'manage/:id',
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://y-gamma-lyart.vercel.app/menu/${params.id}`),
      },
      {
        path: 'cart/',
        element: <Cart />,
        
      },
      {
        path: 'userHome',
        element: <UserHome />,
      },
      {
        path: 'userOrder',
        element: <UserOrder />,
      },
      {
        path: 'myPayment',
        element: <UserPayment />,
      },
      {
        path: 'userReview',
        element: <UserReview />,
      },
      {
        path: 'blogs',
        element: <UserBlogs />,
      },
    ],
  },
]);
