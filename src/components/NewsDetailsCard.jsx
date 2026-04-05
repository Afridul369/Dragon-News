import React from 'react'
import { Link } from 'react-router'

const NewsDetailsCard = ({news}) => {
    // console.log(news)

    
  return (
    <div>
        <h1 className='font-bold mb-5'>Dragon News</h1>
        <img src={news?.image_url} alt="" className='w-full h-112 object-cover rounded-xl'/>
        <h2 className='font-bold text-2xl mt-8 mb-4'>{news?.title}</h2>
        <p className='font-medium text-accent'>{news?.details}</p>
        <Link to={`/categories/${news?.category_id}`}
            className='btn btn-secondary mt-5'
        >Back To Category</Link>
    </div>
  )
}

export default NewsDetailsCard
