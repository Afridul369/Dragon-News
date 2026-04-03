import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import CategoryCard from '../components/CategoryCard'
import { se } from 'date-fns/locale'

const CategoryNews = () => {
  const [categoryNews,setCategoryNews] = useState([])
    const {id} = useParams()
    const data = useLoaderData()
    // console.log(data)
    useEffect(()=>{
      if (id == 0 ) {
        setCategoryNews(data)
        return
      }else if (id == 1) {
        const filteredNews = data.filter((news)=> news.others.is_today_pick === true)
        setCategoryNews(filteredNews)
      }else{
        const filteredNews = data.filter((news)=> news.category_id === parseInt(id))
        setCategoryNews(filteredNews)
      }
      // console.log(filteredNews)
    },[id,data])

  return (
    <div>
        <h1>Total <span className='text-red-700 font-bold'>{categoryNews.length}</span> news found</h1>
        {
          categoryNews.map(news=> <CategoryCard news={news} key={news.id}></CategoryCard>)
        }

    </div>
  )
}

export default CategoryNews
