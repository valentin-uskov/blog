import React, { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import cn from 'classnames'

import css from './Layout.module.scss'

const Layout: FC = () => (
  <div className={css.layout}>
    <header className={css.header}>
      <NavLink className={({ isActive }) => (isActive ? cn(css.link, css.linkActive) : css.link)} to="/">
        На главную
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? cn(css.link, css.linkActive) : css.link)} to="/news">
        Новости
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? cn(css.link, css.linkActive) : css.link)} to="/profile">
        Профиль
      </NavLink>
    </header>
    <div />
    <main className={css.main}>
      <Outlet />
    </main>
  </div>
)
export default Layout
