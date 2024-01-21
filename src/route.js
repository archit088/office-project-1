import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Auth from "./Components/Auth/Auth";
import AboutPage from "./Components/About/About";
import Awardpage from "./Components/Awards/Awards";
import Contactpage from "./Components/Contact/Contact";
import Privacypolicy from "./Components/Privacypolicy/Privacypolicy";
import SubCategory  from   "./Components/SubCategorypage/SubCategory";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "login",
    element: <Auth />,
  },
  // {
  //   path: "signup",
  //   element: <Auth />,
  // },
  {
    path: "about-us",
    element: <AboutPage />,
  },
  {
    path:"awards-us",
    element:<Awardpage/>
  },
  {
    path:"contact-us",
    element:<Contactpage/>
  },
  {
    path:"Privacy-page",
    element:<Privacypolicy/>
  },
  {
    path:"/:slug",
    element:<SubCategory/>
},
// {
//   path:"Subwashing",
//   element:<Subwashing/>
// }
]);

const Approute = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Approute