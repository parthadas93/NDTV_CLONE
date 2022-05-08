import "./smallcards.css"

export const SmallCards = ({image, des}) => {
    return <>
    
        <div className="mainhome">
        
        <img src={image}></img>
            <div className="small_des">{des}</div>
            <hr />
        </div>
    
    </>
}