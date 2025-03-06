import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllSportsEquipment from "../Pages/All_Sports_Equipment/AllSportsEquipment";
import AddEquipment from "../Pages/Add_Equipment/AddEquipment";
import MyEquipmentList from "../Pages/My_Equipment_List/MyEquipmentList";
import Error from "../Pages/Error/Error";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateEquipment from "../Pages/UpdateEquipment/UpdateEquipment";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayouts></Mainlayouts>,
        errorElement:<Error></Error>,
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

            {
                path:"/all-sports-equipment",
                element:<AllSportsEquipment></AllSportsEquipment>
            },
            {
                path:"/add-equipment",
                element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path:"/product_details/:id",
                element:<ProductsDetails></ProductsDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/sports/${params.id}`)
            },
            {
                path:"/my-equipment-list",
                element:<PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>
            },
            {
                path:"/view_details/:id",
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path:"/my-equipment-list",
                element:<PrivateRoute><MyEquipmentList></MyEquipmentList></PrivateRoute>
            },
            {
                path:"/update-equipment/:id",
                element:<PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute>
            },
        ]
    },
])