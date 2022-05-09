import axios from "axios";
import { useEffect, useState } from "react";
import "./world.css";

export const Cities = () => {
  const [world,setworld] = useState([])
  const [rightsidedata,setright] = useState([])

  const worlddatatake = async () => {
    try {
      const res = await fetch(
        `https://ndtvnews-api.herokuapp.com/cities?city=values(chennai,mumbai,delhi,agra,lucknow,ahmedabad)&field=values(headline,description,url,image_url,category,posted_date)`
        
      );
      const world_data = await res.json();

      const world_d = world_data.news[0].articles;
      setworld(world_d);
    } catch (error) {
      console.log(error);
    }
  };

  const rightside = async () => {
    try {
      const res = await fetch(
        `https://ndtvnews-api.herokuapp.com/general?category=values(world)&field=values(headline,url,image_url)`
      );
      const world_data_right = await res.json();
      console.log("world data",world_data_right )
      setright(world_data_right.news[0].articles);
    } catch (error) {
      console.log(error);
    }
  };
  const [dataa, setdata] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-video-search1.p.rapidapi.com/videos/trending",
      headers: {
        "X-RapidAPI-Host": "bing-video-search1.p.rapidapi.com",
        "X-RapidAPI-Key": "abfd7d4ef6msh33776472e031c25p163323jsn2133239d062c",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let data = response.data.bannerTiles;
        setdata([
          data[0].image,
          data[1].image,
          data[2].image,
          data[3].image,
          data[4].image,
          data[5].image,
        ]);
      })
      .catch(function (error) {
        console.error(error);
      });
    worlddatatake();
    rightside();
  }, []);

  return (
    <div id="addcont">
      <img 
        id="add"
        src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg"
        alt=""
      />
      <div id="worldcontainer">
        <div id="leftside">
          <h1>Cities</h1>
          <h3>Trending</h3>
          <div id="trendingcontainer">
            {dataa.map((e) => (
              <div id="trending">
                <img id="trendingimg" src={e.thumbnailUrl} alt="" />
                <p>{e.headLine}</p>
              </div>
            ))}
          </div>
          <img  id="rightimg" src="https://previews.123rf.com/images/vectorpocket/vectorpocket1711/vectorpocket171100361/90243827-tomato-juice-ad-poster-design-.jpg" alt="" />

        </div>
        <div id="center">
          {world.map((e) => (
            <div id="worldbox">
              <img id="worldimg" src={e.image_url} alt="" />
              <div id="box">
                <h3 id="headline">{e.headline}</h3>
                <p id="time">Posted at : {e.posted_date}</p>
                <p id="description">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div id="rightside">
          <img
            id="rightimg"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-ad-template-design-939d7e31b8423bfe4fe39ec1111fa0e6_screen.jpg?ts=1636999495"
            alt=""
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/11354060169723105229"
            alt=""
          />
          <div>
            console.log(rightsidedata)
            {rightsidedata.map((e) => (
              <div id = "right">
                <img id = "rightimg" src={e.image_url} alt="" />
                <h4>{e.headline}</h4>
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
