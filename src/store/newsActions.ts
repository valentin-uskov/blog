import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchNews } from '../api/newsApi'
import { NewsItem } from '../models'

export const getNews = createAsyncThunk<NewsItem[], undefined, { rejectValue: string }>(
  'news/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const news = await fetchNews()
      return news
    } catch (e) {
      return rejectWithValue('Error fetching news')
    }
  },
)
