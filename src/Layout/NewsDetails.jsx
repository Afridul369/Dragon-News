import { useEffect, useState } from 'react'
import Header from '../components/Header'
import RightAside from '../components/HomeLayout/RightAside'
import { useLoaderData, useParams } from 'react-router'
import NewsDetailsCard from '../components/NewsDetailsCard'

const NewsDetails = () => {
    const [news,setNews] = useState()
    const data = useLoaderData()
    const {id} = useParams()
    // console.log(data,id)
    useEffect(()=>{
        const newsData = data.find(singlenews=> singlenews.id === id)
        setNews(newsData)
        // console.log(newsData)
    },[id,data])
  return (
    <div className='w-10/12 mx-auto '>
        <header>
            <Header></Header>
        </header>
        <main className='grid grid-cols-12 gap-8 py-10'>
            <section className='col-span-9 p-7 border border-[#E7E7E7] rounded-2xl'>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
        </main>
    </div>
  )
}

export default NewsDetails
