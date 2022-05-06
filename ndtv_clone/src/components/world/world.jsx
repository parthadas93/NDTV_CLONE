import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { worlddata } from "../../refactors/actiontype";
import "./world.css";

export const World = () => {
  const dispatch = useDispatch();

  const world = useSelector((store) => store.world);

  const worlddatatake = async () => {
    try {
      const res = await fetch(
        `https://ndtvnews-api.herokuapp.com/general?category=values(world)&field=values(headline,description,url,image_url,category,posted_date)`
      );
      const world_data = await res.json();

      const world_d = world_data.news[0].articles;
      dispatch(worlddata(world_d));
    } catch (error) {}
  };

  useEffect(() => {
    worlddatatake();
  }, []);

  return (
    <div id="worldcontainer">
      <div id="leftside">
        <h1>World News</h1>
        <h3>Trending</h3>
        {/* <div>{real.map((e) => (
            <div>
                <img src={e.image_url} alt="" />
                <p>{e.headline}</p>
            </div>
        ))}</div> */}
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
          src="https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-template_106176-353.jpg?size=338&ext=jpg&ga=GA1.2.658481148.1651592142"
          alt=""
        />
      </div>
    </div>
  );
};
