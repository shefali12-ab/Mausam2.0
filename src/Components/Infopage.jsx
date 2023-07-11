import  { useEffect, useState } from "react"
import Button from "./Button";
import Card from "./Card";
import Card2 from "./Card2";
import axios from "axios";




const Infopage =()=>{
  const [myData,setMyData]=useState([])
    useEffect(()=>{
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,rain_sum,showers_sum,snowfall_sum&current_weather=true&timeformat=unixtime&timezone=GMT").then((res)=> setMyData(res.data)).catch((err)=>{
            console.log(err)
        });
    },[])

    return(<>
    
    <div className="bg-dark"> 
    <button className=" bg-white  h-[2rem] w-[2rem] p-1 rounded-full top-3 m-5 absolute right-[10rem]"> </button>
    <button className=" bg-grey  h-[2rem] w-[2rem] p-1 rounded-full top-3 m-5 absolute right-[6rem]"> </button>
    <div className=" mt-[5rem] ml-[10rem]"> 
    
    { myData.daily ? <Card time={myData.daily.time[0]} max={myData.daily.temperature_2m_max[0]} min={myData.daily.temperature_2m_min[0]}/> : "Loading data..."}
    
  
    
       
     
    </div>
   
    <h1 className="text-white mt-[1rem] ml-[10rem]">Today's Highlight </h1>
    <Card2/>
    
    
    </div>
    
    
    
    </>)
}
export default Infopage;