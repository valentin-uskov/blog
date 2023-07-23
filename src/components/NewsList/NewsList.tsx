import React, { FC } from 'react'
import { NewsItem } from '../../models'

type Props = {
  news: NewsItem[]
}
const NewsList: FC<Props> = ({ news }) => {
  return (
    <>
      {news.map((newsItem) => (
        <article key={newsItem.id}>
          <h3>{newsItem.title}</h3>
          <p>{newsItem.body}</p>
        </article>
      ))}
      {!news.length && <span>No news...</span>}
    </>
  )
}

export default NewsList
