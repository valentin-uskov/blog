import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../../store/newsActions'
import { AppDispatch, RootState } from '../../store'
import NewsList from '../../components/NewsList'

const News: FC = () => {
  const { items: news, error } = useSelector((state: RootState) => state.news)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  return (
    <>
      <h1>News</h1>
      {error && <span>{error}</span>}
      <NewsList news={news} />
    </>
  )
}

export default News
