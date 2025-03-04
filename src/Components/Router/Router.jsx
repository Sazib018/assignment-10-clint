import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayouts></Mainlayouts>,
        errorElement:<></>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]
    },
])