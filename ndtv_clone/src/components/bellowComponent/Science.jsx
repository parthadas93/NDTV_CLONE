import axios from "axios";
import { useState ,useEffect } from "react";
import{Addata}from "../../data/adddata"

import {Smallcart, Trending}  from "../Midnav/smallcart";
import "../Midnav/Ofbeat.css"

export const Science =()=>{
    const [count, setCount] = useState([]);
    const [trend,setTrend] =useState([]);

    useEffect(()=>{
    axios.get("https://ndtvnews-api.herokuapp.com/general?category=values(science)").then((res)=>{setCount(res.data.news[0].articles)})
    }, []);

    useEffect(()=>{
        axios.get("https://ndtvnews-api.herokuapp.com/general?category=values(entertainment,india)").then((res)=>{setTrend(res.data.news[0].articles)})
        }, [])
    
    // console.log(count)
    // console.log(trend)
    return(
        <>
        <div>
            <div className="firstadd">
                <div></div>
                <img src="https://tpc.googlesyndication.com/daca_images/simgad/6995379205245889733" alt="" />
            </div>

            <h1 style={{textAlign:"left" ,marginLeft:"300px",fontSize:"45px"}}>Science</h1>
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
            <div className="rightmost">
                {/* <h4>letest things</h4> */}
                <div>
                    {
                        Addata.map((e)=>
                            <div>
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