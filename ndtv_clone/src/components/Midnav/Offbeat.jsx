import axios from "axios";
import { useState ,useEffect } from "react";

import {Smallcart, Trending}  from "./smallcart";
import "./Ofbeat.css"

export const Offbeat =()=>{
    const [count, setCount] = useState([]);
    const [trend,setTrend] =useState([]);

    useEffect(()=>{
    axios.get("https://ndtvnews-api.herokuapp.com/general?category=values(offbeat)").then((res)=>{setCount(res.data.news[0].articles)})
    }, []);

    useEffect(()=>{
        axios.get("https://ndtvnews-api.herokuapp.com/general?category=values(entertainment,india)").then((res)=>{setTrend(res.data.news[0].articles)})
        }, [])
    
    console.log(count)
    console.log(trend)
    return(
        <>
        <div><h1 style={{textAlign:"left" ,marginLeft:"200px"}}>Offbeat</h1>
          <div className="containerdiv">

          <div className="left">
              <div className="heading"><b>TENDING</b></div>
            {
             trend.map((e)=>{
                return <Trending image={e.image_url} headline={e.headline} ></Trending>
               })
            }
        </div>

                           
            <div className="right">
                {
                count.map((e)=>{
                    return <Smallcart image={e.image_url} headline={e.headline} url={e.url} description={e.description} posted_date={e.posted_date}></Smallcart>
                })
                }
            </div>

            
            </div>   
        </div>
        </>
    )
}