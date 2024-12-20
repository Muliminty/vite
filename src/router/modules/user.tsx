import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import BasicLayout from '@/layouts/BasicLayout'

// eslint-disable-next-line react-refresh/only-export-components
const UserPage = lazy(() => import('@/pages/user'))

export const userRoutes: RouteObject[] = [
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {
                path: '/user',
                element: <UserPage />
            }
        ]
    }
] 