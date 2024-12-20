import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './BlankLayout.module.scss'

const BlankLayout: FC = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  )
}

export default BlankLayout 