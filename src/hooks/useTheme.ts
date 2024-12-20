import { useState, useEffect, useMemo } from 'react';
import { theme as antdTheme } from 'antd';
import type { ThemeConfig } from 'antd';

type Theme = 'light' | 'dark';

// Ant Design 主题配置
const lightTheme: ThemeConfig = {
    algorithm: antdTheme.defaultAlgorithm,
    token: {
        // 可以在这里自定义亮色主题的 token
        colorPrimary: '#1677ff',
    },
    components: {
        Layout: {
            headerBg: '#fff',
        }
    }
};

const darkTheme: ThemeConfig = {
    algorithm: antdTheme.darkAlgorithm,
    token: {
        // 可以在这里自定义暗色主题的 token
        colorPrimary: '#1677ff',
    },
    components: {
        Layout: {
            headerBg: '#141414',
        }
    }
};

export const useTheme = () => {
    const getInitialTheme = (): Theme => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) {
            return savedTheme;
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        window.location.reload();
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // 使用 useMemo 确保 antdThemeConfig 在 theme 改变时更新
    const antdThemeConfig = useMemo(() => {
        return theme === 'light' ? lightTheme : darkTheme;
    }, [theme]);

    useEffect(() => {
        console.log('Current theme:', theme);
        console.log('Ant Design theme config:', antdThemeConfig);
    }, [theme, antdThemeConfig]);

    return {
        theme,
        toggleTheme,
        isDark: theme === 'dark',
        antdThemeConfig,
    };
}; 