import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/services",
            element: <Home/>
        },
        {
            path: "/portfolio",
            element: <Home/>
        },
        {
            path: "/testimonial",
            element: <Home/>
        },
        {
            path: "/contact",
            element: <Home/>
        },
      ]
    },
  ]);
  export default router;