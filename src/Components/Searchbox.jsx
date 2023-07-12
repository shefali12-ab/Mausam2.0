import react from "react"
import  { useEffect, useState } from "react"
import axios from "axios";
import { ReactDOM } from "react";
import shower from '../Images/Shower.png'
import Button from "./Button"
import icons from "../iconsmap"

//import { getWeather } from "../Weather";
const Searchbox=(props)=>{

    const [myData,setMyData]=useState([])
    useEffect(()=>{
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=relativehumidity_2m,showers,snowfall,pressure_msl,surface_pressure,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,rain_sum,showers_sum,snowfall_sum&current_weather=true&timeformat=unixtime&timezone=GMT").then((res)=> setMyData(res.data)).catch((err)=>{
            console.log(err)
        });
    },[])

    const DAY_FORMATTER =  new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long',day: 'numeric'})
    var creation_time= myData.current_weather && myData.current_weather.time
    var currentdate = DAY_FORMATTER.format(creation_time*1000)
   // var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return(<>
    
    <div className="bg-midnight  justify-items-center ">
     <input className="bg-grey text-white p-2 m-16 w-[12rem] search-box " type="search" name="Search" id="" placeholder="Search for places"/>
     
     <button className=" bg-grey  h-[2rem] w-[2rem] p-1 rounded-full top-3"> </button>
     {/* <img className=" bg-my "  ></img> */}
     {/* <Button/> */}
   { myData.current_weather && <img  className="mx-auto " src={icons(myData.current_weather.weathercode)} ></img>
     }
     
     <div className="grid justify-items-center text-white">
        <div >
      {  myData.current_weather && <h1 >{myData.current_weather.temperature}</h1>}
       

        </div>
        <h1> </h1>
        <div>
           <p className="inline-block"> <span>Today</span> <span>.</span> <span>{currentdate}</span></p>
            
       
         
        </div>
        <div>
            {/* <icon>location icon</icon> */}
            <p></p>
        </div>
        
     </div>
    </div>


    </>)
}
export default Searchbox;