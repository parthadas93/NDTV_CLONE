import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios"
import {useEffect} from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
  console.log("tes")
  },[])
  return (
    <div className="App">
     
    </div>
  )
}

export default App
