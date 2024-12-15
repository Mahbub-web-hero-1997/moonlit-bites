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
import UserDashboard from '../Components/Dashboard/UserDashboard/UserDashboard';
import Cart from '../Components/Dashboard/UserDashboard/Cart';
import UserHome from '../Components/Dashboard/UserDashboard/UserHome';
import Order from '../Components/Dashboard/UserDashboard/UserOrder';
import UserOrder from '../Components/Dashboard/UserDashboard/UserOrder';
import UserPayment from '../Components/Dashboard/UserDashboard/UserPayment';
import UserReview from '../Components/Dashboard/UserDashboard/UserReview';

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
        element: (
         
            <Review />
         
        ),
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
      <PrivateRoute>
        <UserDashboard />
      </PrivateRoute>
    ),
    children: [
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
    ],
  },
]);
