import React, { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import cn from 'classnames'

import css from './Layout.module.scss'

const Layout: FC = () => (
  <div>
    <header className={css.header}>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? cn(css.link, css.activeLink) : css.link)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? cn(css.link, css.activeLink) : css.link)} to="/news">
          News
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? cn(css.link, css.activeLink) : css.link)} to="/profile">
          Profile
        </NavLink>
      </nav>
    </header>
    <div />
    <main className={css.main}>
      <Outlet />
    </main>
  </div>
)
export default Layout
