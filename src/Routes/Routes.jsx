import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    hydrateFallbackElement:<p>loading.... </p>,
    children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/apps",
            element: <Apps/>,
        },
        {
            path: "/installation",
            element: <Installation/>,
        }
    ]
  },
]);

export default router