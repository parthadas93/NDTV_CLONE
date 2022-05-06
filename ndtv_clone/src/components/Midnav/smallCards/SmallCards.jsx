import "./smallcards.css"

export const SmallCards = ({image, des}) => {
    return <>
    
        <div className="main">
        
        <img src={image}></img>
            <div className="small_des">{des}</div>
            <hr />
        </div>
    
    </>
}