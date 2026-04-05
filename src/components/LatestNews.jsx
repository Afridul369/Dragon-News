import React, { use, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useParams } from "react-router";

const data = fetch('/news.json').then(res=> res.json())

const LatestNews = () => {
  const [news,setNews] = useState([])
  const {id} = useParams()
  // console.log(id)
  const newsdata = use(data)
    // console.log(newsdata)
    useEffect(()=>{
        if (id == 1 ) {
          const data = newsdata.filter(datas=> datas.others.is_today_pick == true)
          // console.log(data)
          setNews(data)
        }
    },[id,newsdata])
    
  return (
    <div className="w-10/12 mx-auto my-5 p-3 ">
      <div className="flex items-center gap-10 ">
        <p className="text-white bg-secondary px-4 py-2">Latest</p>
        <Marquee.default>
          {/* <p className="text-base-300 font-bold mr-10">
            Match Highlights: Germany vs Spain — as it happened!
          </p> */}
          {
            news && news.map(singlenews=> <p className="font-bold mr-10 text-base-300">{singlenews.title}</p>)
          }
        </Marquee.default>
      </div>
    </div>
  );
};

export default LatestNews;
