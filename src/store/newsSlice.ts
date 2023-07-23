import { createSlice } from '@reduxjs/toolkit'
import { getNews } from './newsActions'
import { NewsItem } from '../models'

type NewsState = {
  loading: boolean
  error: string | null
  items: NewsItem[]
}

const initialState: NewsState = {
  loading: false,
  error: null,
  items: [],
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false
        state.items = payload
      })
      .addCase(getNews.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload ?? null
      })
  },
})

export default newsSlice.reducer
