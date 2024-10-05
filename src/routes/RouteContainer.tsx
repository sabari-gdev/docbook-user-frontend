import { FC } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Layout from "@layout/Layout";

import Home from "@pages/Home/Home";
import DoctorsListing from "@pages/Doctors/DoctorsListing";
import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";

const RouteContainer: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/doctors",
          element: <DoctorsListing />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouteContainer;
