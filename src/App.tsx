import { useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { RouteGuard } from '@/router/guard'
import { routes } from '@/router'
import { useTheme } from '@/hooks/useTheme'

function App() {
  const element = useRoutes(routes)
  const { antdThemeConfig } = useTheme()

  return (
    <ConfigProvider theme={antdThemeConfig}>
      <RouteGuard>{element}</RouteGuard>
    </ConfigProvider>
  )
}

export default App
