import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurItemPage from "../Pages/OurItem/OurItemPage/OurItemPage";

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
        }
      ]
    },
  ]);

  export default router;