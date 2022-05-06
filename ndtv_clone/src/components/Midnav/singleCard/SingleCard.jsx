import "./singleCard.css"

export const SingleCard = ({image, des}) => {
    return <div className="single_main">
        <img src={image} alt="" />
        <b>{ des}</b>



    </div>
}