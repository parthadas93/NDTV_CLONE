
import axios from 'axios'

import React, { useEffect, useState } from 'react'

import "./TrendingNews.css"

export const TrendingNews=()=> {

  const [news, setNews]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{

    const data= await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=543e62b5bc9443678e343cb09c03e291") 
      
    const resp=data.data.articles;
    setNews([...resp])
  }
  return (
    <div className='curr-trend'>

    {/* <div className='heading'> <h1>TRENDING</h1></div> */}
      {
        news.map((news)=>(
    
    <div className='curr-main-trend'>
     <div className='curr-img-trend'>
           <img width="100%" height="100%" src={news.urlToImage} />
     </div>
  
     <div className='text-div-trend'> 
     {news.title}
     </div>
      </div>
        ))
      }
  
    </div>
    )
}


