import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

interface LoginForm {
    username: string
    password: string
}

const Login: FC = () => {
    const navigate = useNavigate()

    const onFinish = async (values: LoginForm) => {
        const { username, password } = values

        // 模拟登录逻辑
        if (username === 'root' && password === 'admin') {
            // 生成随机 Token 并存储到 localStorage
            const token = Math.random().toString(36).substring(2) // 生成随机字符串
            localStorage.setItem('token', token)

            message.success('登录成功')
            // 跳转到首页
            navigate('/')
        } else {
            message.error('用户名或密码错误')
        }
    }

    return (
        <div className={styles.container}>
            <Card className={styles.card} title="系统登录" bordered={false}>
                <Form
                    name="login"
                    onFinish={onFinish}
                    autoComplete="off"
                    size="large"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="用户名"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login
