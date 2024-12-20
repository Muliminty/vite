import React from 'react';
import { ConfigProvider } from 'antd';
import { useTheme } from './hooks/useTheme';
import { useRoutes } from 'react-router-dom'
import { RouteGuard } from '@/router/guard'
import { routes } from '@/router'

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
