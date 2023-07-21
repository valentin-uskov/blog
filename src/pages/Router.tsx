import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './Home'
import NotFound from './NotFound'
import News from './News'
import Profile from './Profile'
import Login from './Login'

const Router: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="news" element={<News />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default Router
