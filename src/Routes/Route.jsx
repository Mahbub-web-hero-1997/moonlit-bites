import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menus";
import Blogs from "../Components/Blogs/Blogs";
import Experts from "../Components/Experts/Experts";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

import Root from "../Components/Root";

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
            }
        ]
    },
   
])