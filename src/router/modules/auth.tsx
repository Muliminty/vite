import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import BlankLayout from '@/layouts/BlankLayout'

// eslint-disable-next-line react-refresh/only-export-components
const Login = lazy(() => import('@/pages/login'))

export const authRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <BlankLayout />,
        children: [
            {
                path: '',
                element: <Login />
            }
        ]
    }
] 