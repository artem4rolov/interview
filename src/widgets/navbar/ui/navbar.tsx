import React, { FC } from 'react'
import { INavBarProps } from '../model'

import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { LINK_MAIN_PAGE } from '@/shared'

export const NavBar: FC<INavBarProps> = ({ className }) => {
  return (
    <div className={styles['navbar']}>
      <Link to={LINK_MAIN_PAGE}>На главную</Link>
    </div>
  )
}
