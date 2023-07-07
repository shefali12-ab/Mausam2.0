import  { useEffect, useState } from "react"
import Button from "./Button";
import Card from "./Card";
import Card2 from "./Card2";
import axios from "axios";




const Infopage =()=>{
  const [myData,setMyData]=useState([])
    useEffect(()=>{
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,pressure_msl,visibility,windspeed_10m,temperature_80m,temperature_120m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max&current_weather=true&timeformat=unixtime&timezone=GMT").then((res)=> setMyData(res.data));
    },[])

    return(<>
    <div className="bg-dark"> 
    <button className=" bg-white  h-[2rem] w-[2rem] p-1 rounded-full top-3 m-5 absolute right-[10rem]"> </button>
    <button className=" bg-grey  h-[2rem] w-[2rem] p-1 rounded-full top-3 m-5 absolute right-[6rem]"> </button>
    <div className=" mt-[5rem] ml-[10rem]"> 
    

    <Card time={myData.hourly.time[0]} />
        {/* <Card latitude={myData.daily.time[0] />
        <Card latitude={myData.latitude}/>
        <Card latitude={myData.latitude}/>
        <Card latitude={myData.latitude}/>
        <Card latitude={myData.latitude}/> */}
       
     
    </div>
    <h1 className="text-white mt-[1rem] ml-[10rem]">Today's Highlight </h1>
    <Card2/>
    
    
    </div>
    
    
    
    </>)
}
export default Infopage;