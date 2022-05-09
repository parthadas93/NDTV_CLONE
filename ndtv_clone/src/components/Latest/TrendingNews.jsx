
import axios from 'axios'

import React, { useEffect, useState } from 'react'

import "./TrendingNews.css"

export const TrendingNews=()=> {

  const [news, setNews]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{

    await axios.get("https://ndtvnews-api.herokuapp.com/general").then((res)=>{setNews(res.data.news[0].articles)})
      
    // const resp=data.data.articles;
    // setNews([...resp])
  }
  return (
    <div className='curr-trend'>

    {/* <div className='heading'> <h1>TRENDING</h1></div> */}
      {
        news.map((news)=>(
    
    <div className='curr-main-trend'>
     <div className='curr-img-trend'>
           <img  src={news.image_url} />
     </div>
  
     <div className='text-div-trend'> 
     {news.headline}
     </div>
      </div>
        ))
      }
  
    </div>
    )
}


