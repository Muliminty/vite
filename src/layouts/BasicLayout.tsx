import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const BasicLayout: FC = () => {
    return (
        <div>
            <header>Header</header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default BasicLayout 