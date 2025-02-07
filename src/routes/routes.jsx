import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

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
            element: <Home/>
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