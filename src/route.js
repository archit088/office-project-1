


import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginFinal from "./Components/login/login";
import Homepage from "./Components/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "login",
    element: <LoginFinal />,
  },
]);

const Approute = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Approute