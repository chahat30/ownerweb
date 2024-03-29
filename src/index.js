import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signup from './Components/Signup'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Components/Login'
import Otp from './Components/Otp';
import AuthState from './context/auth/authState';
import CategoryState from './context/category/categoryState';
import Dashboard from './Components/Dashboard';
import Menu from './Components/Menu'
import Orders from './Components/Orders'
import Outlet from './Components/Outlet'
import Category from './Components/Category';
import EditCategory from './Components/EditCategory';
import Outletdetails from './Components/Outletdetails';
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
import SidebarState from './context/sidebar/sidebarState'
import OrderItem from './Components/OrderItem';
import OrderState from './context/orders/orderState';
=======
>>>>>>> c2c89bfa771e35fcc9ffdf28bf66a232be0e7f52

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/otp",
        element: <Otp />,
    },
    {
        path: "/category",
        element: <Category />
    },
    {
        path: "/orderitem",
        element: <OrderItem />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children:[
            {
                path:"menu",
                element:<Menu/>
            },
            {
                path:"orders",
                element:<Orders/>
            },
            {
                path:"outlet",
                element:<Outlet/>
            },
            {
                path: "editcategory",
                element: <EditCategory />
            },
            {
                path:"outletdetails",
                element:<Outletdetails/>
<<<<<<< HEAD
            },
            {
=======
            }
>>>>>>> c2c89bfa771e35fcc9ffdf28bf66a232be0e7f52
                path: "addcategory",
                element: <EditCategory />
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
<<<<<<< HEAD
        <ToastContainer closeOnClick draggable pauseOnHover/>
        <OrderState>
            <SidebarState>
                <CategoryState>
                    <AuthState>
                        <RouterProvider router={router} />
                    </AuthState>
                </CategoryState>
            </SidebarState>
        </OrderState>
=======
        <CategoryState>
            <AuthState>
                <RouterProvider router={router} />
            </AuthState>
        </CategoryState>
>>>>>>> c2c89bfa771e35fcc9ffdf28bf66a232be0e7f52
    </React.StrictMode>
);
