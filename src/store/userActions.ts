import { createAsyncThunk } from '@reduxjs/toolkit'
import userData from '../userData.json'
import { User } from '../models'

// Fake Logic
export const getUserData = createAsyncThunk<User, string, { rejectValue: string }>(
  'user/fetchData',
  async (token: string, { rejectWithValue }) => {
    const userInfo = userData

    if (token === userData.token) {
      return userInfo
    } else {
      return rejectWithValue('User data fetching error')
    }
  },
)
