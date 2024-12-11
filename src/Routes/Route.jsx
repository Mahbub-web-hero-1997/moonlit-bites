import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menus";
import Blogs from "../Components/Blogs/Blogs";
import Experts from "../Components/Experts/Experts";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Root from "../Components/Root";
import Review from "../Components/Reviews/Reviews";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";


export const router = createBrowserRouter([
   
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element:<Home/>
        },
            {
                path: "/menu",
                element: <Menu />,  
                loader:()=>fetch('http://localhost:5000/pagination')
            },
            {
                path: "/blogs",
                element:<Blogs/>
            },
            {
                path: "/experts",
                element:<Experts/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/review",
                element:<Review/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/register",
                element:<Register/>
            }
       
        ]
    },
   
])