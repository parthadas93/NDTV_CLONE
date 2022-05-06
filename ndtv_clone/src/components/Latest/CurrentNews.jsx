


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./CurrentNews.css"
export const  CurrentNews=()=> {

  const [news, setNews]= useState([])

  useEffect(()=>{
getData()
  },[])

  const getData=async()=>{

    const data= await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=543e62b5bc9443678e343cb09c03e291")
    const resp=data.data.articles
     setNews([...resp])
     
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
         <img width="100%" height="100%" src={news.urlToImage} />
   </div>

   <div className='text-div'> 
   {news.title}
   </div>
    </div>
 


      ))
    }

  </div>
  )
}


