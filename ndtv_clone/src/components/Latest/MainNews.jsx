
import axios from 'axios'
import React, { useEffect, useState } from 'react'
  import "./MainNews.css"
export const MainNews=()=> {
  const [news , setNews]= useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{

     await axios.get("https://ndtvnews-api.herokuapp.com/general").then((res)=>{setNews(res.data.news[0].articles)})

    // const resp=data.data.articles
      
    //     setNews([...resp])

        // console.log("rest",news )

  }
  return (
    <div className='mainAll'>
       {/* <div className='heading'> <h1>TRENDING</h1></div> */}
    {
      news.map((news)=>(
  
  <div className='news-main' key={news.posted_date}>

   <div className='news-img'>
       <a href={news.url}>
       <div className='imgmain'>
           <img 
            src={news.image_url} />
        </div>
       </a>
   </div>

   <div className='text-news'> 
  <h4> {news.headline}</h4>
    <p> <span><a href=''>Jhon Doe</a></span> | <span style={{color:"#2F2E2F"}}>   {news.posted_date}</span></p>
    <h5 style={{color:"#676667", lineHeight:"1.3"}}>{news.description}</h5>
   </div>
    </div>
 


      ))
    }

    </div>
  )
}



