import "./smallcards.css"

export const SmallCards = ({image, des}) => {
    return <>
    
        <div className="main">
        
        <img src={image}></img>
        <b>{ des}</b>
        </div>
    
    </>
}