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
<div className="p-4 bg-midnight w-[10rem] h-[12rem] text-white inline-block m-[1rem] font-raleway ">
  
  <h1 className="text-sm">  {dateval}</h1>
  <img className="h-[4rem] mt-[1rem] mx-[auto]" src={props.imgval}></img>
 {/* { console.log(props.imgval)} */}
  {/* <p><span > {props.max}</span> <span className="place-items-end">{props.min}</span></p> */}
  <p className="inline-block  mt-[2rem] mr-[2.1rem] text-sm"> {props.max} &deg;C </p>
  <p className=" inline-block mt-[2rem] text-sm text-grey"> {props.min} &deg;C </p>
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