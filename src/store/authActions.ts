import { createAsyncThunk } from '@reduxjs/toolkit'

import { LoginData } from '../models'
import userData from '../userData.json'

// Fake Logic
export const userLogin = createAsyncThunk<string, LoginData, { rejectValue: string }>(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    if (payload.name === 'Admin' && payload.password === '12345') {
      const userInfo = userData
      return userInfo.token
    } else {
      return rejectWithValue('Username or password is incorrect')
    }
  },
)
