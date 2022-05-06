import {Link} from "react-router-dom"
import "./Navbar.css"

export const UpNav=()=>{

    const Navbar=[
        {title:"NDTV",to:"/"},
        {title:"हिन्दी",to:"/hindi"},
        {title:"BUSINESS",to:"/business"},
        {title:"MOVIES",to:"/movies"},
        {title:"CRICKET",to:"/cricket"},
        {title:"TECH",to:"/tech"},
        {title:"FOOD",to:"/food"},
        {title:"CRYPTO",to:"/crypto"},
        {title:"WEB STORIES",to:"/webstories"},
        {title:"EDUCATION",to:"/education"},
        {title:"AUTO",to:"/auto"},
        {title:"SWASTH",to:"/swasth"},
        {title:"LIFESTYLE",to:"/lifestyle"},
        {title:"HEALTH",to:"/health"},
        {title:"SHOPING",to:"/shoping"},
        {title:"ART",to:"/art"},
        
    ]
    
    return(
        <div className="upmain">
                           

                {
                    Navbar.map((e,i)=>{
                       return <Link className="uplink" key={i} to={e.to} >{e.title}
                        </Link>
                    })
                }
                
            
        </div>
    )
}