import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Blogs from "../Components/Blogs/Blogs";
import Experts from "../Components/Experts/Experts";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
        path: "/menu",
        element:<Menu/>
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