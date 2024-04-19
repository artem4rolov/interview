import { Suspense, useEffect, useState } from 'react'

// import reactLogo from '../shared/assets/react.svg'
// import viteLogo from '/vite.svg';

import styles from './app.module.scss'
import { NavBar } from '@/widgets'
import { Route, Routes } from 'react-router'
import { routerConfig } from '@/shared'

export const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [])

  return (
    <div className={styles['app-container']}>
      <NavBar />

      <Suspense fallback={'Загрузка..'}>
        <Routes>
          {Object.values(routerConfig).map((config) => (
            <Route
              key={config.id}
              path={config.path}
              element={config.element}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}
