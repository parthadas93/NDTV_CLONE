import axios from "axios";
import { useState ,useEffect } from "react";
import{Addata}from "../../data/adddata"

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
    
    // console.log(count)
    // console.log(trend)
    return(
        <>
        <div>
            <div className="firstadd">
                <div><h1>Most Trusted Coding Platform</h1>
                    <h2>Learn data Structure and algoritham</h2>
                <p>One Stop for all Coding Lovers. <br></br>Choose & Start today from our wide range of courses.</p></div>
                <img src="https://tpc.googlesyndication.com/simgad/2580929734641262972/downsize_200k_v1?sqp=4sqPyQSWAUKTAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MhoI2gMQ-AEYASABLQAAAD8w2gM4-AFFAACAPw&rs=AOga4qkgoVdekZH0uqBWX-guqQJzlR1p8w" alt="" />
            </div>

            <h1 style={{textAlign:"left" ,marginLeft:"300px",fontSize:"45px"}}>Offbeat</h1>
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