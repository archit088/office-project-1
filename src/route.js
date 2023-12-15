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
import Subwashing from "./Components/Subwashing/Subwashing";
import Formdeatails from "./Components/Formdetails/Formdetails";

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
    path:"SubCategory-page",
    element:<SubCategory/>
},
{
  path:"Subwashing",
  element:<Subwashing/>
},
{
  path:"formdeatails",
  element:<Formdeatails/>
}

]);

const Approute = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Approute