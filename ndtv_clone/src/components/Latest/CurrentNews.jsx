


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./CurrentNews.css"
export const  CurrentNews=()=> {

  const [news, setNews]= useState([])

  useEffect(()=>{
getData()
  },[])

  const getData=async()=>{

     await axios.get("https://ndtvnews-api.herokuapp.com/general").then((res)=>{setNews(res.data.news[0].articles)})
    // const resp=res.data.news[0].articles
    //  setNews([...resp])
     
    console.log("news",resp)
    
  }
  console.log("sat", news)
  return (
  <div className='curr'>
  <div className='heading'> <h1>TRENDING</h1></div>
    {
      news.map((news)=>(
  
  <div className='curr-main'>
   <div className='curr-img'>
         <img  src={news.image_url} />
   </div>

   <div className='text-div'> 
   {news.headline}
   </div>
    </div>
 


      ))
    }

  </div>
  )
}


