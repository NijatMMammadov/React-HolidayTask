import React from 'react';
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard";
import AddProduct from "../Pages/Admin/AddProduct";
import EditProduct from "../Pages/Admin/EditProduct";
import AdminDetail from "../Pages/Admin/AdminDetail";
import UserRoot from "../Pages/User/UserRoot";
import Home from "../Pages/User/Home";
import Detail from "../Pages/User/Detail";
import Favorites from "../Pages/User/Favorites";
import Basket from "../Pages/User/Basket";
import NotFound from "../Pages/NotFound";
import AdminProducts from '../Pages/Admin/Product';


const ROUTES = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "*",
                element: < NotFound />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "addproduct",
                element: <AddProduct />
            },
            {
                path: "admindetail/:id",
                element: <AdminDetail />
            },
            {
                path: "editproduct",
                element: <EditProduct />
            },
            {
                path: "adminproducts",
                element: <AdminProducts/>
            },
            {
                path: "*",
                element: < NotFound />
            }
        ]
    }
]

export default ROUTES


