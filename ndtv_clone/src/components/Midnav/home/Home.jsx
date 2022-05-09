import axios from "axios";
import { useEffect, useState } from "react";
import { SmallCards } from "../smallCards/SmallCards";
import "./home.css";
import { Typography } from "antd";
import { Card } from "antd";
import { SingleCard } from "../singleCard/SingleCard";
const { Meta } = Card;
import { Link } from "react-router-dom";
import  { useRef} from 'react'
import { Videos } from "../videos/Video";
import { ImageDiv } from "../imageDiv/ImageDiv";
import { useParams } from "react-router-dom";

const { Title } = Typography;

export const Home = () => {
  const [data, setData] = useState([]);
  const [top, setTop] = useState([])
  const vidRef = useRef(null);
  const [bit, setBit]= useState([])

  const handlePlayVideo = () => {
    this.vidRef.play();
    vidButtonRef.current.classList.add('is-playing');
  }

  useEffect(() => {
    axios.get("https://ndtvnews-api.herokuapp.com/general").then((res) => {
      setData(res.data.news[0].articles);
    });
  }, []);
  console.log(data)

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0d5c533e390b465b871030f8f9e94c34").then((res)=>{setTop(res.data.articles)})
  }, [])
  
  useEffect(() => {
    axios.get("https://ndtvnews-api.herokuapp.com/general").then((res)=>{setBit(res.data.articles)})
  }, [])
  const {title} = useParams()

//  console.log(top)
  return (
    <>
      <div className="main_div">
        {/* left div start */}
        <div className="leftkk">
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
                <Link to="/:title">
                <SmallCards
                  key={e.id}
                  image={e.image_url}
                  des={e.headline}
                ></SmallCards>
                </Link>
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

          <div className="six">
            <ImageDiv image="./images/n.webp" des="Man Discovers He Is Famous On Google Maps After Neighbours Visit Him" ></ImageDiv>
            <ImageDiv image= "./images/new.webp" des="Rhea Chakraborty, Rakul Preet-Jackky Bhagnani At Huma's Eid Party"></ImageDiv>
            <ImageDiv image="./images/s.webp" des="Jaffer's Tweet On Girl's Proposal During RCB vs CSK Game Wins Internet"></ImageDiv>
         

          </div>

           

     

        </div>

        


        <div className="right">
        
          <h4 className="trend">Treanding News</h4>
          <div className="right_main">
          {bit.map((e) => {
            return (
                <SmallCards image={e.urlToImage} des={e.title}></SmallCards>



            )
          })}
              </div>

        </div>
      </div>
      <div className="seven">
        
        <SmallCards image="./images/5.webp"  des ="Opinion: India's Heatwaves Are Testing The Limits Of Human Survival"></SmallCards>
        <SmallCards image="./images/6.webp" des ="Opinion: Time For Rahul Gandhi To Do A Vajpayee"  ></SmallCards>
        <SmallCards image="./images/7.webp" des="Opinion: This Maharashtra Day, We Stand At A Crossroads" ></SmallCards>
        
      </div> 
      
       
      <div className="eight">
        <ImageDiv image="./images/8.webp" des ="Sunny days are incomplete without Saniya Malhotra in a pretty summer dress"></ImageDiv>
        <ImageDiv image="./images/9.jpg" des="Alia and Ranvir will be the first guest for Coffee with Karan 7"></ImageDiv>
        <ImageDiv image="./images/10.webp" des="Sara In A Multi-Coloured Sequin Dress Has Left Us Absolute Speechless"></ImageDiv>
           <Videos url="./video/v3.mp4" des=""></Videos>
            <Videos url="./video/v2.mp4" des="Watch: Can't bat with you. Cheeky Maxwell tells Kohli on run out"></Videos>


      </div>

      <div className="nine">

   
        {bit.map((e) => {
          return (

              <SingleCard  image={e.urlToImage} des={e.title}></SingleCard>
            )
          })}
          


      </div>
    </>
  );
};

