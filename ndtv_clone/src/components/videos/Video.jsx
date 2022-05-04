import ReactPlayer from "react-player";
import "./video.css";
export const Videos = ({ url }) => {
  return (
    <div className="video_div">
      <ReactPlayer
        className="react-player fixed-bottom"
        url={url}
        width="250px"
        height="250px"
        playing={true}
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
      />
      <b>P Chidambaram Heckled After Defending Bengal Government Action In Court</b>
    </div>
  );
};
