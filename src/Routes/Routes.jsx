import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurItemPage from "../Pages/OurItem/OurItemPage/OurItemPage";
import Shop from "../Pages/Shop/Shop";

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
        // {
        //   path: 'shop',
        //   element: <Shop></Shop>
        // },
        {
          path: 'shop/:category',
          element: <Shop></Shop>
        }
      ]
    },
  ]);

  export default router;