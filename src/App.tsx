import { ConfigProvider } from 'antd';
import { useTheme } from './hooks/useTheme';
import { useRoutes } from 'react-router-dom'
import { RouteGuard } from '@/router/guard'
import { routes } from '@/router'
import '@/assets/styles/theme-variables.css'
const App = () => {
  const { antdThemeConfig } = useTheme();
  const element = useRoutes(routes)

  return (
    <ConfigProvider theme={antdThemeConfig}>
      <RouteGuard>{element}</RouteGuard>
    </ConfigProvider>
  );
};

export default App;
