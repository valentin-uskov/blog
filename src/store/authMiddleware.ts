import { userLogin } from './authActions'
import { userLogout } from './authSlice'
import { Middleware } from '@reduxjs/toolkit'

export const authMiddleware: Middleware = () => (next) => (action) => {
  if (userLogin.fulfilled.match(action)) {
    localStorage.setItem('token', action.payload)
  } else if (userLogout.match(action)) {
    localStorage.removeItem('token')
  }
  return next(action)
}
