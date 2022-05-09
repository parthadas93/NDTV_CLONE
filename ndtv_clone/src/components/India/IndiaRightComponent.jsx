import axios from "axios"
import React, { useEffect, useState } from "react";
import "./IndiaRightComponent.css"
export const IndiaRightComponent =() =>{
    const [trendNews, setTrendNews] = useState([]);

    const fetchData = async () =>{
        const trendNews = await axios.get("https://ndtvnews-api.herokuapp.com/general?category=values(latest,world)&field=values(headline,url,image_url)")
        // const trendNews = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5e25f249bfa64f288599a8d81ba360dc&pageSize=5")

        setTrendNews(trendNews.data.news[0].articles)
        // console.log((trendNews.data.articles));
    }

    useEffect(() =>{
        fetchData()
    },[])

    return (
        <div className="TrnendDisplay">
           
            {trendNews.map((e,i)=>{
               
                return(
                    <div className="IndRightContainer" key={i}>
                         <img className="TrendIndImg" src={e.image_url} />
                         <p className="IndRightText">{e.headline}</p>
                    </div>
                )
            })

            }
        </div>
    )

}
