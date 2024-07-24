import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home,ErrorBoundary,Login,Register,App,AdForm,ViewAd} from '../components/index'

 const router = createBrowserRouter([
    {
        path: '',
        element: <App/>,
        errorElement: <ErrorBoundary />,
        children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
        {
            path: '/create',
            element: <AdForm />,
        },
        {
            path: '/ad/:ID',
            element: <ViewAd />
        }

        ]
    }
 ])

 export function Router({children}) {
    return (
        <RouterProvider router = {router}>
            {children}
        </RouterProvider>
    )
 }