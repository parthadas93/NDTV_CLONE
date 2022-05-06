import { useDebugValue, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios"
import {useEffect} from "react"
import NewsDisplay from "./Components/India/India"

function App() {
  // const [count, setCount] = useState([])

  // useEffect(()=>{
  // axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0d5c533").then((res)=>{setCount(res.data.articles)})
  // }, [])
  
  // console.log(count)
  return (
    <div className="App">
      
      {/* {count.map((e) => {
        return (
          <img src ={`${e.urlToImage}`}  ></img>
        )
       })} */}
     
    </div>
  )
}

export default App
//0d5c533e390b465b871030f8f9e94c34