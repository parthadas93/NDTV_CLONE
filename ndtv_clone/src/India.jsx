import axios from "axios";
import React, { useEffect, useState } from "react";
import "./India.css"
import { TrendDisplay } from "./IndiaTrend";
import {Indianews} from "./IndiaNews";
import {IndiaNewsDetail} from "./IndiaNewsDetail"

const NewsDisplay = () => {
  const [newsData, setnewsData] = useState([]);
  // console.log(newsData);

  // const fetchData = async () => {
  //   const news = await axios.get(
  //     "https://ndtvnews-api.herokuapp.com/general?category=values(india)&field=values(headline,description,url,image_url,posted_date&_limit=10)"
  //   );
  //   setnewsData(news.data.news[0].articles);
  //   // console.log(news.data.news[0].articles)
  // };
  
  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   const news = await axios.get(
  //   //     "https://ndtvnews-api.herokuapp.com/general?category=values(india)&field=values(headline,description,url,image_url,posted_date&_limit=10)"
  //   //   );
  //   //   setnewsData(news.data.news[0].articles);
  //   //   console.log(news.data.news[0].articles)
  //   // };
  //   fetchData();
  // }, []);

  return (
    <div className="NewsDisplay">
      <div className="NewsDisplay1">
      <TrendDisplay />
      </div>
      <div className="news1">
      
    <Indianews />
    </div>
    <div className="NewsDisplay2">
    {/* <TrendDisplay /> */}
    <IndiaNewsDetail />
    </div>
    </div>
  );
};

export default NewsDisplay;