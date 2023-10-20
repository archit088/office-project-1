import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Auth from "./Components/Auth/Auth";

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
]);

const Approute = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Approute