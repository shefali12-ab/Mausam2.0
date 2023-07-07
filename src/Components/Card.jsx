import react from "react"
//import { getWeather } from "../Weather";
import { useState, useEffect } from "react";
import axios from "axios"
const Card =( props)=>{
return<>
<div className="bg-midnight w-[8rem] h-[10rem] text-white inline-block m-[1rem]">
  <h1>  {props.time}</h1>
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