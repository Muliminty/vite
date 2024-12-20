import { Button } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import { useTheme } from '../../hooks/useTheme';
import styles from './index.module.scss';

const Header = () => {
    const { toggleTheme, isDark } = useTheme();

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                {/* 这里可以放置你的 Logo */}
                系统名称
            </div>
            <div className={styles.actions}>
                <Button
                    type="text"
                    icon={<BulbOutlined />}
                    onClick={toggleTheme}
                    title={`切换到${isDark ? '亮色' : '暗色'}主题`}
                />
            </div>
        </div>
    );
};

export default Header; 