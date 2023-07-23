import axios from 'axios'

export const fetchNews = async () => {
  const newsApiURL = process.env.REACT_APP_NEWS_API_URL
  const response = await axios.get(`${newsApiURL}/posts?_start=0&_end=5`)

  return response.data
}
