import { createSlice } from '@reduxjs/toolkit'
import { User } from '../models'
import { getUserData } from './userActions'

type UserState = {
  loading: boolean
  userInfo: User | null
  error: string | null
}

const initialState: UserState = {
  loading: false,
  userInfo: null,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload ?? null
      })
  },
})

export default userSlice.reducer
