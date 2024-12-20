import { FC, Suspense } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// 定义白名单路由，不需要鉴权即可访问
const whiteList = ['/login']

// 定义 GuardProps 接口，用于限定组件的 props 类型
interface GuardProps {
    children: React.ReactNode // 子组件，表示路由的内容部分
}

/**
 * 路由守卫组件，用于拦截未授权访问并处理页面权限
 * @param {GuardProps} props - 包含子组件的 props
 * @returns 如果已登录或在白名单中，返回子组件；否则跳转到登录页面
 */
export const RouteGuard: FC<GuardProps> = ({ children }) => {
    // 获取当前路由的路径名
    const { pathname } = useLocation()
    // 从本地存储中获取 token，判断用户是否已登录
    const token = localStorage.getItem('token')

    /**
     * 鉴权逻辑：
     * 1. 如果没有 token 且当前路由不在白名单中，则跳转到登录页面。
     * 2. 如果有 token 或当前路由在白名单中，正常渲染子组件。
     */
    if (!token && !whiteList.includes(pathname)) {
        // 使用 React Router 的 Navigate 组件进行路由跳转
        return <Navigate to="/login" replace />
    }

    /**
     * 如果通过鉴权，则使用 Suspense 包裹子组件。
     * Suspense 是 React 的懒加载组件，可以为子组件的异步加载设置 fallback 占位内容。
     */
    return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}
