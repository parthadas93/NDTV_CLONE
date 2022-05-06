
import React from 'react'
import { CurrentNews } from './CurrentNews'

import {TrendingNews} from './TrendingNews'
import "./styled.css"
import { MainNews } from './MainNews'
import {BsChevronLeft} from "react-icons/bs  "

export const  Latest=()=> {

 
  return (
    <div >
            <div className='Heading'>
            
              <div className='small-heading'>
                <p style={{color:"#465E8B", marginLeft:"120px"}}><span >Home  <BsChevronLeft/><span> Latest News</span></span></p>
              </div>


                <div className='' style={{display:"flex" ,marginLeft:"150"}}><h1 style={{marginLeft:"110px" ,marginBottom:"50px"}}>Latest News</h1></div>
            </div>



            <div className='mainDivlet'>
            
            <div  className='currentNews'> <CurrentNews/></div>
              <div className='mainNews'> <MainNews/></div>
            <div className='trendingNews'> <TrendingNews/></div>

            </div>
    </div>
  )
}


