import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import { toggleshow } from "../redux/Action";
import {BsSmartwatch} from "react-icons/bs"
import "./Navbar.css"


export const Nav=()=>{

    const dispatch=useDispatch();

   
    const hiden=useSelector(store=>store.isshow);

    const Navbar=[
        {title:"LIVE TV",to:"#"},
        {title:"LATEST",to:"/latest"},
        {title:"COVID",to:"/covid"},
        {title:"INDIA",to:"/india"},
        {title:"OPINION",to:"/opinion"},
        {title:"VIDEO",to:"/video"},
        {title:"CITIES",to:"/cities"},
        {title:"WORLD",to:"/world"},
        {title:"OFFBEAT",to:"/offbeat"},
        {title:"TRENDS",to:"/trends"},
        {title:"PHOTOS",to:"/photos"},
        
    ];

    const icontab=[
        {
            link:"https://www.facebook.com/ndtv?campaign_id=237467320636",
            img:"https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
        },
        {
            link:"https://twitter.com/ndtv",
            img:"https://cdn-icons-png.flaticon.com/128/733/733579.png",
        },
        {
            link:"https://www.kooapp.com/profile/ndtv",
            img:"https://www.kooapp.com/assets/2d634360.svg",
        },
        
        {
            link:"",
            img:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
        },

    ]
    //IoWatchOutline
    
    return(
        <div className="mainvav">
            <Link to={"/"}><img style={{color:"white",height:"20px"}} src="https://drop.ndtv.com/homepage/images/ndtvlogo23march.png" alt="" /></Link>
           

                {
                    Navbar.map((e,i)=>{
                       return <Link style={{
                        margin:"10px",
                        textDecoration:"none",color:"white"}} key={i} to={e.to} >{e.title}
                        </Link>
                    })
                }
            <button style={{background:"rgb(62,62,62)" ,border:"none",color:"white"}} onClick={()=>dispatch(toggleshow(!hiden))}>{'...'}</button>
            {
                icontab.map((e,i)=>
                   <a key={i} href={e.link}><img className="icon" src={e.img} alt="" /></a> 
                )

            }
            <BsSmartwatch className="watch_image"></BsSmartwatch>
            
            
        </div>
    )
}