import React, { useEffect, useState } from "react";

export const IndiaNewsDetail= ( )=>{
    const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('news'));
  if (items) {
   setItems(items);
  }
}, []);

    return(
        <div className="news1">
        {items.map((e,i)=>{
         
          return (
              <div className="indiaContainer" key={i}>
               
                <div className="IndiaHeadline">
                <p className="Indhead">{e.news}</p>
                <p className="Indheight">{e.posted_date}</p>
                <p className="IndDes">{e.description}</p>
                </div>
            </div>
          )
        })
      }
      
      </div>
    )
}