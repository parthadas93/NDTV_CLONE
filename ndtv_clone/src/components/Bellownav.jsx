import {Link} from "react-router-dom"
import "./Navbar.css"

export const Bellownav=()=>{

    const Navbar=[
        {title:"SOUTH",to:"/south"},
        {title:"PEOPLE",to:"/people"},
        {title:"SCIENCE",to:"/science"},
        {title:"PHOTOS",to:"/photos"},
        {title:"JOBS",to:"/job"},
        {title:"WEATHER",to:"/weather"},
        {title:"TV SCHEDULE",to:"/tvschedule"},
        {title:"TRAINS",to:"/trains"},
       
    ]
    
    return(
        <div className="main">
               {
                    Navbar.map((e,i)=>{
                       return <Link style={{
                        margin:"10px",
                        textDecoration:"none",color:"white"}} key={i} to={e.to} >{e.title}
                        </Link>
                    })
                }
                      
        </div>
    )
}