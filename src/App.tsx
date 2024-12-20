import { useRoutes } from 'react-router-dom'
import { RouteGuard } from '@/router/guard'
import { routes } from '@/router'

function App() {
  const element = useRoutes(routes)

  return <RouteGuard>{element}</RouteGuard>
}

export default App
