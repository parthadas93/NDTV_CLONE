import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import { toggleshow } from "../redux/Action";
import "./Navbar.css"


export const Nav=()=>{

    const dispatch=useDispatch();

   
    const hiden=useSelector(store=>store.isshow);

    const Navbar=[
        {title:"LIVE TV",to:"/liveTv"},
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
        
    ]
    
    return(
        <div className="main">
            <Link to={"/"}><img style={{color:"white"}} src="https://drop.ndtv.com/homepage/images/ndtvlogo23march.png" alt="" /></Link>
           

                {
                    Navbar.map((e,i)=>{
                       return <Link style={{
                        margin:"10px",
                        textDecoration:"none",color:"white"}} key={i} to={e.to} >{e.title}
                        </Link>
                    })
                }
            <button style={{background:"rgb(62,62,62)" ,border:"none",color:"white"}} onClick={()=>dispatch(toggleshow(!hiden))}>{'...'}</button>
            
        </div>
    )
}