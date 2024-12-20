import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import BasicLayout from '@/layouts/BasicLayout'

// eslint-disable-next-line react-refresh/only-export-components
const Dashboard = lazy(() => import('@/pages/dashboard'))

export const dashboardRoutes: RouteObject[] = [
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />
            }
        ]
    }
] 