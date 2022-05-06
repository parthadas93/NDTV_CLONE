import axios from "axios";
import React, { useEffect, useState } from "react";
import "./IndiaNews.css"
import { useNavigate } from "react-router-dom";

export const Indianews = () =>{
    // let navigate = useNavigate();
    const [newsData, setnewsData] = useState([]);
    // console.log(newsData);
    
    const fetchData = async () => {
      const news = await axios.get(
        "https://ndtvnews-api.herokuapp.com/general?category=values(india)&field=values(headline,description,url,image_url,posted_date&_limit=10)"
      );
      setnewsData(news.data.news[0].articles);
      // console.log(news.data.news[0].articles)
    };
    
    useEffect(() => {
     
      fetchData();
    }, []);
    
    // const routeChange = () =>{
    //   let path ="";
    //   navigate()
    // }
    
    
      return (
          
        <div className="news1">
        {newsData.map((e,i)=>{
          
          function handleClick(){
            
            // console.log("NEWS")
            var newsObj = {
              headline:e.headline,
              description:e.description
            }
            var newsarr =  []
            newsarr.push(newsObj)
             localStorage.setItem("news",JSON.stringify(newsarr))
            
          }
          
          return (
            
              <div className="indiaContainer" onClick={handleClick} key={i}>
                <img className="indiaImg" src={e.image_url} />
                <div className="IndiaHeadline">
                <p className="Indhead">{e.headline}</p>
                <p className="Indheight">{e.posted_date}</p>
                <p className="IndDes">{e.description}</p>
                </div>
            </div>
          )
        })
      }
      
      </div>
      )

}