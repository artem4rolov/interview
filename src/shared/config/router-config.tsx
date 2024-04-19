import React from 'react'
import { RouteProps } from 'react-router'
import { Home } from '@/pages'

enum PageNames {
  HOME = 'home',
}

const RouterPaths: Record<PageNames, string> = {
  [PageNames.HOME]: '/',
}

export const routerConfig: Record<PageNames, RouteProps> = {
  [PageNames.HOME]: {
    path: RouterPaths.home,
    element: <Home />,
  },
}
