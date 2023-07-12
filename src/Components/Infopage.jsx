import  { useEffect, useState } from "react"
import Button from "./Button";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3"
import axios from "axios";

import icons from "../iconsmap";


const Infopage =()=>{
  const [myData,setMyData]=useState([])
    useEffect(()=>{
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=relativehumidity_2m,showers,snowfall,pressure_msl,surface_pressure,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,rain_sum,showers_sum,snowfall_sum&current_weather=true&timeformat=unixtime&timezone=GMT").then((res)=> setMyData(res.data)).catch((err)=>{
            console.log(err)
        });
    },[])

   
    return(<>
    
    <div className="bg-dark"> 
    <button className=" bg-white  h-[2rem] w-[2rem] p-1 rounded-full top-3 m-5 absolute right-[10rem]"> </button>
    <button className=" bg-grey  h-[2rem] w-[2rem] p-1 rounded-full top-3 m-5 absolute right-[6rem]"> </button>
    <div className=" mt-[5rem] ml-[10rem]"> 
    
    { myData.daily ? <Card time={myData.daily.time[1]} max={myData.daily.temperature_2m_max[1]} min={myData.daily.temperature_2m_min[1]} imgval={icons(myData.daily.weathercode[1])}/> : "Loading data..."}
    
   {myData.daily && <Card time={myData.daily.time[2]} max={myData.daily.temperature_2m_max[2]} min={myData.daily.temperature_2m_min[2]} imgval={icons(myData.daily.weathercode[2])}/>}
   {myData.daily && <Card time={myData.daily.time[3]} max={myData.daily.temperature_2m_max[3]} min={myData.daily.temperature_2m_min[3]}  imgval={icons(myData.daily.weathercode[3])}/>}
  
   {myData.daily && <Card time={myData.daily.time[4]} max={myData.daily.temperature_2m_max[4]} min={myData.daily.temperature_2m_min[4]}  imgval={icons(myData.daily.weathercode[4])}/>}
  
   {myData.daily && <Card time={myData.daily.time[5]} max={myData.daily.temperature_2m_max[5]} min={myData.daily.temperature_2m_min[5]}  imgval={icons(myData.daily.weathercode[5])}/>}
  
  
  {/* for(let i=0;i!=6;i++){
    <Card time={myData.daily.time[i]} max={myData.daily.temperature_2m_max[i]} min={myData.daily.temperature_2m_min[i]}/>
  }  */}
       
     
    </div>
   
    <h1 className="text-white mt-[1rem] ml-[10rem]">Today's Highlight </h1>
 {myData.current_weather && <Card2 text ={"Wind Speed"} val={myData.current_weather.windspeed}/>}
 {myData.current_weather && <Card2  text={"Humidity"} val={myData.hourly.relativehumidity_2m[0]}/>}
   { myData.current_weather && <Card3 text={"Visibility"} val={myData.hourly.visibility[0]}/>}
   { myData.current_weather && <Card3 text={"Sea Level Pressure"} val={myData.hourly.surface_pressure[0]}/>}
    
    </div>
    
    
    
    </>)
}
export default Infopage;