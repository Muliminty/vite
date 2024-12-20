import { useState, useEffect } from 'react';
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
        const savedTheme = localStorage.getItem('theme') as Theme;
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

    // 返回当前主题配置
    const antdThemeConfig = theme === 'light' ? lightTheme : darkTheme;

    return {
        theme,
        toggleTheme,
        isDark: theme === 'dark',
        antdThemeConfig, // 新增返回 Ant Design 主题配置
    };
}; 