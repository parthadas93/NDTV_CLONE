import axios from "axios";
import { useEffect, useState } from "react";
import { SmallCards } from "../smallCards/SmallCards";
import "./home.css";
import { Typography } from "antd";
import { Card } from "antd";
import { SingleCard } from "../singleCard/SingleCard";
const { Meta } = Card;




import  { useRef} from 'react'
import { Videos } from "../videos/Video";
import { ImageDiv } from "../imageDiv/ImageDiv";


const { Title } = Typography;

export const Home = () => {
  const [data, setData] = useState([]);
  const [top, setTop] = useState([])
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    this.vidRef.play();
    vidButtonRef.current.classList.add('is-playing');
  }

  useEffect(() => {
    axios.get("https://ndtvnews-api.herokuapp.com/general").then((res) => {
      setData(res.data.news[0].articles);
    });
  }, []);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0d5c533e390b465b871030f8f9e94c34").then((res)=>{setTop(res.data.articles)})
},[])

//  console.log(top)
  return (
    <>
      <div className="main_div">
        {/* left div start */}
        <div className="left">
          <div className="big_story">
            <Title level={4}> Big Story</Title>
            <img src="./images/top.webp" alt="" />
            <Title level={5}>
              RBI Hikes Rates In A Surprise Move, First Increase In 4 Years: 10
              Points
            </Title>
          </div>
          <div className="top_story">
            <Title level={4}>Top Stories</Title>
            {data.map((e) => {
              return (
                <SmallCards
                  key={e.id}
                  image={e.image_url}
                  des={e.headline}
                ></SmallCards>
              );
            })}
          </div>
        </div>
              {/* left div end */}
        <div className="middle">
        
          <div className="first">
            <img src="./images/middle1.webp" alt="" />
            <Title level={3}>
            UP Cop, Who Allegedly Raped 13-Year-Old Rape Survivor, Arrested
            </Title>

          </div>

          <div className="second">

            {top.map((e) => {
              return (
                <SingleCard image={e.urlToImage} des={e.description} > </SingleCard>
              )
            })}


          </div>

          <div className="third">

            <Videos url="./video/v1.mp4"></Videos>
            <SingleCard image="./images/3.webp" des= "RBI Hikes Rates In A Surprise Move, First Increase In 4 Years: 10 Points"></SingleCard>


          </div>

          <div className="fifth">

          <div className="forth">

            <div>

            {data.map((e) => {
              return (
                <SmallCards   image={e.image_url}
                des={e.headline}></SmallCards>
              )
            })}
            </div>

          </div>
          <div>

            <ImageDiv image= "./images/4.webp" des= "Army's New Vests Order After Terrorists Use Armour-Piercing Bullets"></ImageDiv>
          </div>
          </div>

           

         

        </div>
        <div className="right">
        
          

        </div>
      </div>
    </>
  );
};

