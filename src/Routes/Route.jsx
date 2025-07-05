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
import UserOrder from '../Components/Dashboard/UserDashboard/UserOrder/UserOrders';

import AllUsers from '../Components/Dashboard/AdminDashboard/AllUsers/AllUsers';
import AddItems from '../Components/Dashboard/AdminDashboard/AddItems/AddItems';
import GetItems from '../Components/Dashboard/AdminDashboard/GetAllItems/GetItems';
import AllOrders from '../Components/Dashboard/AdminDashboard/AllOrders/AllOrders';
import ManageItems from '../Components/Dashboard/AdminDashboard/ManageItems/ManageItems';
import AdminRoute from './AdminRoute';
import Dashboard from '../Components/Dashboard/Dashboard';
import Checkout from '../Components/CheckOut/Checkout';
import UserHome from '../Components/Dashboard/UserDashboard/UserHome';
import UserPayment from '../Components/Dashboard/UserDashboard/UserPayment';
import UserReview from '../Components/Dashboard/UserDashboard/Reviews/UserReview';
import AddBlogs from '../Components/Dashboard/UserDashboard/Blogs/AddBlogs';
import NotFound from '../Components/NotFound';
import PaymentForm from '../Components/Dashboard/UserDashboard/UserOrder/PaymentForm';
import MyReviews from '../Components/Dashboard/UserDashboard/Reviews/MyReviews';



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
        // loader: () => fetch('http://localhost:5000/pagination'),
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
          fetch(`http://localhost:5000/api/v1/menus/single/${params.id}`, {
            credentials: 'include',
          }),
      },
    ],

  },
  {
    path: '*',
    element: <NotFound />,
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
            <AllOrders />
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
          fetch(`http://localhost:5000/api/v1/menus/single/${params.id}`, {
            credentials: 'include',
          }),


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
        path: "paymentForm/:id",
        element: <PaymentForm />,

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
        path: "myReviews",
        element: <MyReviews />
      },
      {
        path: 'blogs',
        element: <AddBlogs />,
      },
    ],
  },
]);
