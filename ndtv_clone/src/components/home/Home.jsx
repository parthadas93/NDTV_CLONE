import axios from "axios"
import {useEffect, useState} from "react"
import { SmallCards } from "../smallCards/SmallCards"
import "./home.css"
import { Typography } from 'antd';

const { Title } = Typography;

export const Home = () => {
    const [data, setData]= useState([])

    useEffect(() => {
      axios.get("https://ndtvnews-api.herokuapp.com/general").then((res)=>{setData(res.data.news[0].articles)})
    },[])
    return <>
      <div className='topNews'>
      <Title level={3}>Top Stories</Title>
      {data.map((e) => {
        return (
          <SmallCards key ={e.id} image={ e.image_url} des = {e.headline}></SmallCards>
      )
    })}
      </div>
  
      <div className='middle'>
    
      </div>
      </>  
}