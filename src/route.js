import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Auth from "./Components/Auth/Auth";
import AboutPage from "./Components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "login",
    element: <Auth />,
  },
  {
    path: "signup",
    element: <Auth />,
  },
  {
    path: "about-us",
    element: <AboutPage />,
  },
]);

const Approute = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Approute