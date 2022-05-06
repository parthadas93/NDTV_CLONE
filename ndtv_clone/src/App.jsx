import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Nav} from "./components/Navbar"
import {Route,Routes}from "react-router-dom"
import { Home } from './components/Midnav/home/Home';
import { LiveTV } from './components/Midnav/LiveTv';
import {Cities} from "./components/Midnav/Cities";
import {Covid} from "./components/Midnav/Covid";
import {India} from "./components/India/India";
import {Letest} from "./components/Midnav/Latest";
import {Offbeat} from "./components/Midnav/Offbeat";
import {Opinion} from "./components/Midnav/Opinion";
import {Photos} from "./components/Midnav/Photos";
import {Trends} from "./components/Midnav/Trends";
import {Video} from "./components/Midnav/Video";
import { World } from './components/Midnav/World'
import { UpNav } from './components/UpNavbar'
import { Hindi } from './components/UpNav/hindi'
import { Business } from './components/UpNav/Business'
import { Movies } from './components/UpNav/Movies'
import {Cricket} from "./components/UpNav/Cricket"
import {Tech} from "./components/UpNav/Tech"
import {Food} from "./components/UpNav/Food"
import {Crypto} from "./components/UpNav/Crypto"
import {WebStories} from "./components/UpNav/Webstories"
import {Education} from "./components/UpNav/Education"
import {Auto} from "./components/UpNav/Auto"
import {Swasth} from "./components/UpNav/Swasth"
import {LifeStyle} from "./components/UpNav/LifeStyle"
import {Health} from "./components/UpNav/Health"
import {Shoping} from "./components/UpNav/Shoping"
import {Art} from "./components/UpNav/Art"
import {Bellownav} from "./components/Bellownav"
import { South } from './components/bellowComponent/South'
import { People } from './components/bellowComponent/People'
import { Science } from './components/bellowComponent/Science'
import { Job } from './components/bellowComponent/Jobs'
import { Weather } from './components/bellowComponent/Weather'
import { TvSchedule } from './components/bellowComponent/TVschedule'
import { Trains } from './components/bellowComponent/Trains'
import { useDispatch, useSelector } from "react-redux"
function App() {


  const hiden=useSelector(store=>store.isshow);
  
 console.log(hiden)
  return (
    <div className="App">
      <div className='navdiv'>
        <div className='midnav'>
          <UpNav></UpNav>
          <br />
        <Nav></Nav> 
        {hiden ? <Bellownav></Bellownav>: null}
           
        </div>
       
       
      </div>

      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/liveTv" element={<LiveTV/>}></Route>
          <Route path="/latest" element={<Letest/>}></Route>
          <Route path="/covid" element={<Covid/>}></Route>
          <Route path="/india" element={<India/>}></Route>
          <Route path="/opinion" element={<Opinion/>}></Route>
          <Route path="/video" element={<Video/>}></Route>
          <Route path="/cities" element={<Cities/>}></Route>
          <Route path="/world" element={<World/>}></Route>
          <Route path="/offbeat" element={<Offbeat/>}></Route>
          <Route path="/trends" element={<Trends/>}></Route>
          <Route path="/photos" element={<Photos/>}></Route>

          //upnav components
          <Route path="/hindi" element={<Hindi/>}></Route>
          <Route path="/business" element={<Business/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/cricket" element={<Cricket/>}></Route>
          <Route path="/tech" element={<Tech/>}></Route>
          <Route path="/food" element={<Food/>}></Route>
          <Route path="/crypto" element={<Crypto/>}></Route>
          <Route path="/webstories" element={<WebStories/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
          <Route path="/auto" element={<Auto/>}></Route>
          <Route path="/swasth" element={<Swasth/>}></Route>
          <Route path="/lifestyle" element={<LifeStyle/>}></Route>
          <Route path="/health" element={<Health/>}></Route>
          <Route path="/shoping" element={<Shoping/>}></Route>
          <Route path="/art" element={<Art/>}></Route>
          
          //bellow nav components
          <Route path="/south" element={<South/>}></Route>
          <Route path="/people" element={<People/>}></Route>
          <Route path="/science" element={<Science/>}></Route>
          <Route path="/job" element={<Job/>}></Route>
          <Route path="/weather" element={<Weather/>}></Route>
          <Route path="/tvschedule" element={<TvSchedule/>}></Route>
          <Route path="/trains" element={<Trains/>}></Route>



      </Routes> 
    </div>
  )
}

export default App
