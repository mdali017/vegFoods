import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurItemPage from "../Pages/OurItem/OurItemPage/OurItemPage";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../components/secret/secret";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'our-item',
          element: <OurItemPage></OurItemPage>
        },
        {
          path: 'shop',
          element: <Shop></Shop>
        },
        {
          path: 'shop/:category',
          element: <Shop></Shop>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'secret',
          element: <PrivateRoutes> <Secret></Secret> </PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;