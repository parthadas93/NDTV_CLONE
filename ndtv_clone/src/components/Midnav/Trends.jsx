import axios from "axios";
import { useState ,useEffect } from "react";
import{Addata}from "../../data/adddata"

import {Smallcart, Trending}  from "./smallcart";
import "./Trends.css"

export const Trends =()=>{
   
    const [trend,setTrend] =useState([]);

    // useEffect(()=>{
    // axios.get("https://ndtvnews-api.herokuapp.com/general?category=values(offbeat)").then((res)=>{setCount(res.data.news[0].articles)})
    // }, []);

    useEffect(()=>{
        axios.get(" https://newsapi.org/v2/top-headlines?country=in&apiKey=bd45453f7cef4f6fb21197c147dcaa38").then((res)=>{setTrend(res.data.articles)})
        }, [])
    
    // console.log(count)
    console.log(trend)
    return(
        <>
        <div>
            <div className="firstadd">
                <div></div>
                <img src="https://tpc.googlesyndication.com/daca_images/simgad/7204193796666812968" alt="" />
            </div>

            <h1 style={{textAlign:"left" ,marginLeft:"300px",fontSize:"45px"}}>Trending</h1>
          <div className="containerdiv">

          <div className="Trendingleft">
              <div className="heading"><b>TENDING</b></div>
            {
             trend.map((e,i)=>{
                return <div key={i}><p className="rank">{i+1}</p><Trending key={i} image={e.urlToImage} headline={e.title} date={e.publishedAt}></Trending></div>
               })
            }
        </div>

                           
            {/* <div className="right">
                {
                count.map((e)=>{
                    return <Smallcart image={e.image_url} headline={e.headline} url={e.url} description={e.description} posted_date={e.posted_date}></Smallcart>
                })
                }
            </div> */}
            <div className="rightmost">
                {/* <h4>letest things</h4> */}
                <div>
                    {
                        Addata.map((e,i)=>
                            <div key={i}>
                                <img style={{width:"200px"}} src={e.img} alt="" />
                                <p>{e.text}</p>
                            </div>
                        )
                    }
                 
                </div>

            </div>

            
            </div>   
        </div>
        </>
    )
}