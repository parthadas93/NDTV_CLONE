import axios from "axios";
import { useState ,useEffect } from "react";

import {Smallcart}  from "./smallcart";

export const Offbeat =()=>{
    const [count, setCount] = useState([])

    useEffect(()=>{
    axios.get("https://ndtvnews-api.herokuapp.com/general?category=values(offbeat)").then((res)=>{setCount(res.data.news[0].articles)})
    }, [])
    
    console.log(count)
    return(
        <div>home home

            {
                count.map((e)=>{
                    return <Smallcart image={e.image_url} headline={e.headline} url={e.url} description={e.description}></Smallcart>
                })
            }
        </div>
    )
}