import { configureStore } from '@reduxjs/toolkit'

import newsReducer from './newsSlice'
import authReducer from './authSlice'
import userReducer from './userSlice'
import { authMiddleware } from './authMiddleware'

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
