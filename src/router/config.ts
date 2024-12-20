import { RouteObject } from 'react-router-dom'
import { authRoutes } from './modules/auth'
import { dashboardRoutes } from './modules/dashboard'
import { userRoutes } from './modules/user'

// 合并所有路由模块
export const routes: RouteObject[] = [
    ...authRoutes,
    ...dashboardRoutes,
    ...userRoutes
] 