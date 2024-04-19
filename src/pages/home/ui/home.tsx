import { FC } from 'react'
import { IHomeProps } from '../model'

import styles from './home.module.scss'

export const Home: FC<IHomeProps> = ({ title }) => {
  return <div className={styles['home']}>{title}</div>
}
