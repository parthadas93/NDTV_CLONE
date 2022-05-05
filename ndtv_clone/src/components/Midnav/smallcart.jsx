import "./smallcart.css"
export const Smallcart =({image,headline,url,description})=>{


    return <>
    <div className="mainsm">
        <img src={image} alt="" />
        <div>
            <h3>{headline}</h3>
            <h5>{description}</h5>
            <h6><a href={url}>{"For more click here.."}</a></h6>
        </div>
    </div>
    
    </>
}