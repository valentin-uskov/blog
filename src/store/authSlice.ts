import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authActions'

type AuthState = {
  loading: boolean
  token: string | null
  error: string | null
}

const token: string | null = localStorage.getItem('token')

const initialState: AuthState = {
  loading: false,
  token: token,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.loading = initialState.loading
      state.error = initialState.error
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false
        state.token = payload
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload ?? null
      })
  },
})

export const { userLogout } = authSlice.actions
export default authSlice.reducer
