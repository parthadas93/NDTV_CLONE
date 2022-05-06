import "./imageDiv.css"

export const ImageDiv = ({ image, des }) => {
    return <div className="main_image_div">

        <img src={image} alt="" />
        <div className="des">{ des}</div>




    </div>
}