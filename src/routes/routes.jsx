import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";

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
            element: <Services/>
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