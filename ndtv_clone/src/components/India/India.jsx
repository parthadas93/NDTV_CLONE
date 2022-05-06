import axios from "axios";
import React, { useEffect, useState } from "react";
import "./India.css"
import { TrendDisplay } from "./IndiaTrend";
import {Indianews} from "./IndiaNews";
import {IndiaRightComponent} from "./IndiaRightComponent"

const NewsDisplay = () => {
  
  
  return (
    <div >
      <img className="mamaEarth" src="./images/MamaEarth.jpg" />
      <h2 className="IndiaHeadDisplay">India News</h2>
    <div className="NewsDisplay">
      <div className="NewsDisplay1">
      <TrendDisplay />
      </div>
      <div className="news1">
      
    <Indianews />
    </div>
    <div className="NewsDisplay2">
    {/* <TrendDisplay /> */}
    <IndiaRightComponent />
    </div>
    </div>
    </div>
  );
};

export default NewsDisplay;