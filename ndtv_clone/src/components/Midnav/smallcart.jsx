import "./smallcart.css"
export const Smallcart =({image,headline,url,description,posted_date})=>{


    return <>
    <div className="mainsm">
        <img src={image} alt="" />
        <div>
            <h3>{headline}</h3>
            <p>{"Edited by Bhavya Sukheja |"} {posted_date} </p>
            <p>{description}</p>
            <h6><a href={url}>{"For more click here.."}</a></h6>
        </div>
    </div>
    
    </>
};

export const Trending =({image,headline})=>{


    return <>
    <div className="mainsm">
        <img src={image} alt="" />
        <div>
            <h2>{headline}</h2>
           
        </div>
    </div>
    
    </>
}