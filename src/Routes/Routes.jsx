import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
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
        },
        {
            path: "/app/:id",
            element: <AppDetails/>,
        }
    ]
  },
]);

export default router