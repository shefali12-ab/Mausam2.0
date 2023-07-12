import react from "react"
//import { getWeather } from "../Weather";
import { useState, useEffect } from "react";
import axios from "axios"

const Card =( props)=>{
  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long',day: 'numeric'})
  const  time1= (props.time)*1000
  const dateval=  DAY_FORMATTER.format(time1)
  // console.log(dateval)

return<>
<div className="bg-midnight w-[8rem] h-[10rem] text-white inline-block m-[1rem]">
  
  <h1>  {dateval}</h1>
  <img className="h-[5rem]" src={props.imgval}></img>
  <p>{props.max} <span>{props.min}</span></p>
</div>

</>
}
export default Card;
/*
 <div  data-daily-section className="bg-midnight w-[7rem] h-[10rem] p-2 m-10 inline-block text-white " id="day-card-template">
            <h1 data-daily-time> </h1>
           <img src="" alt=""  />
           <p data-daily-maxtemp></p>
            <p data-daily-mintemp> </p>
         </div>


*/