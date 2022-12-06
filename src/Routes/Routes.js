import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Attendacne from '../Pages/Attendance/Attendacne';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import RegisterFirst from '../Pages/Register/RegisterFirst/RegisterFirst';
import RegisterSecond from '../Pages/Register/RegisterSecond/RegisterSecond';
import RegisterThird from '../Pages/Register/RegisterThird/RegisterThird';
import Main from './layout/Main/Main';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: 'attendance',
                    element: <Attendacne></Attendacne>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>,
                    children: [
                        {
                            path: '/register',
                            element: <RegisterFirst></RegisterFirst>
                        },
                        {
                            path: 'registersecond',
                            element: <RegisterSecond></RegisterSecond>
                        },
                        {
                            path: 'registerthird',
                            element: <RegisterThird></RegisterThird>
                        }
                    ]
                }
            ]

        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;