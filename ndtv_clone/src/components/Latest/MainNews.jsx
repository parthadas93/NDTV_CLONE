
import axios from 'axios'
import React, { useEffect, useState } from 'react'
  import "./MainNews.css"
export const MainNews=()=> {
  const [news , setNews]= useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{

    const data= await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=543e62b5bc9443678e343cb09c03e291")

    const resp=data.data.articles
      
        setNews([...resp])

        console.log("rest",news )

  }
  return (
    <div className='mainAll'>
       {/* <div className='heading'> <h1>TRENDING</h1></div> */}
    {
      news.map((news)=>(
  
  <div className='news-main' key={news.publishedAt}>

   <div className='news-img'>
       <a href={news.url}>
       <div className='imgmain'>
           <img 
            src={news.urlToImage} />
        </div>
       </a>
   </div>

   <div className='text-news'> 
  <h4> {news.title}</h4>
    <p> <span><a href=''>{news.author}</a></span> | <span style={{color:"#2F2E2F"}}>   {news.publishedAt}</span></p>
    <h5 style={{color:"#676667", lineHeight:"1.3"}}>{news.content}</h5>
   </div>
    </div>
 


      ))
    }

    </div>
  )
}



