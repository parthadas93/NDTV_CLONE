import axios from "axios";
import { useEffect, useState } from "react";
import "../Midnav/world.css";

export const Science = () => {
  // const dispatch = useDispatch();
  // const world = useSelector((store) => store.world);
  // const [rightsidedata,setright] = useState([])

  // const worlddatatake = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://ndtvnews-api.herokuapp.com/general?category=values(science)&field=values(headline,description,url,image_url,category,posted_date)`
        
  //     );
  //     const world_data = await res.json();

  //     const world_d = world_data.news[0].articles;
  //     // console.log(world_d)
  //     dispatch(worlddata(world_d));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const rightside = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://newsapi.org/v2/everything?q=science&page=1&pagesize=15&apiKey=2329b008441349cb8234dc46e20c1003`
  //     );
  //     const world_data_right = await res.json();
  //     setright(world_data_right.articles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const [dataa, setdata] = useState([]);
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://bing-video-search1.p.rapidapi.com/videos/trending",
  //     headers: {
  //       "X-RapidAPI-Host": "bing-video-search1.p.rapidapi.com",
  //       "X-RapidAPI-Key": "abfd7d4ef6msh33776472e031c25p163323jsn2133239d062c",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       let data = response.data.bannerTiles;
  //       setdata([
  //         data[0].image,
  //         data[1].image,
  //         data[2].image,
  //         data[3].image,
  //         data[4].image,
  //         data[5].image,
  //       ]);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  //   worlddatatake();
  //   rightside();
  // }, []);

  return (
    <div id="addcont">
      <img
        id="add"
        src="https://tpc.googlesyndication.com/simgad/10746194111907249807?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4ql6j17c1VXBodM3EC49t9AccNQzhQ"
        alt=""
      />
      <div id="worldcontainer">
        <div id="leftside">
          <h1>Cities</h1>
          <h3>Trending</h3>
          <div id="trendingcontainer">
            {/* {dataa.map((e) => (
              <div id="trending">
                <img id="trendingimg" src={e.thumbnailUrl} alt="" />
                <p>{e.headLine}</p>
              </div>
            ))} */}
          </div>
        </div>
        <div id="center">
          {/* {world.map((e) => (
            <div id="worldbox">
              <img id="worldimg" src={e.image_url} alt="" />
              <div id="box">
                <h3 id="headline">{e.headline}</h3>
                <p id="time">Posted at : {e.posted_date}</p>
                <p id="description">{e.description}</p>
              </div>
            </div> */}
          {/* ))} */}
        </div>
        <div id="rightside">
          <img
            id="rightimg"
            src="https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-template_106176-353.jpg?size=338&ext=jpg&ga=GA1.2.658481148.1651592142"
            alt=""
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/11354060169723105229"
            alt=""
          />
          <div>
            {rightsidedata.map((e) => (
              <div id = "right">
                <img id = "rightimg" src={e.urlToImage} alt="" />
                <h4>{e.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// https://newsapi.org/v2/everything?q=bitcoin&page=1&pagesize=3&apiKey=2329b008441349cb8234dc46e20c1003
// 2329b008441349cb8234dc46e20c1003
