import react from "react"
import  { useEffect, useState } from "react"
import axios from "axios";
import { ReactDOM } from "react";
import shower from '../Images/Shower.png'
import Button from "./Button"
import icons from "../iconsmap"
import "../location"
//import { getWeather } from "../Weather";
import {weather} from "../Cityname"
import getCoordinates from "../location";
const Searchbox=(props)=>{
 

    // const [myData,setMyData]=useState([])
    // useEffect(()=>{
    //     axios.get("https://api.open-meteo.com/v1/forecast?latitude=26.819353&longitude=80.9666491&hourly=relativehumidity_2m,showers,snowfall,pressure_msl,surface_pressure,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,rain_sum,showers_sum,snowfall_sum&current_weather=true&timeformat=unixtime&timezone=GMT").then((res)=> setMyData(res.data)).catch((err)=>{
    //         console.log(err)
    //     });
    // },[])
    const [coords, setCoords] = useState({ latitude: -1, longitude: -1 });

  async function getLocationData() {
    const locationCoords = await getCoordinates();
    setCoords(locationCoords);
  }
  const [myData, setMyData] = useState([])
  useEffect(() => {
    axios.get("https://api.open-meteo.com/v1/forecast?latitude=" + `${coords.latitude}` +"&longitude="+`${coords.longitude}`+"&hourly=relativehumidity_2m,showers,snowfall,pressure_msl,surface_pressure,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,rain_sum,showers_sum,snowfall_sum&current_weather=true&timeformat=unixtime&timezone=GMT").then((res) => setMyData(res.data)).catch((err) => {
      console.log(err)
    });
    getLocationData();
  }, [])
 console.log(coords.latitude)
 console.log(coords.longitude)
 console.log(weather)
 weather.feathcityname(coords.latitude,coords.longitude)
// weather?.feathcityname(coords.latitude,corrds.longitude);
   const DAY_FORMATTER =  new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long',day: 'numeric'})
   var creation_time= myData?.current_weather?.time
   if(creation_time){
    var currentdate= DAY_FORMATTER.format(creation_time*1000)
   }
  // var currentdate = DAY_FORMATTER.format(creation_time*1000)
   //var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return(<>
    
    <div className="bg-midnight  justify-items-center ">
     <input className="bg-grey text-white p-2 m-16 w-[12rem] search-box " type="search" name="Search" id="" placeholder="Search for places"/>
     
     <button className=" bg-grey  h-[2rem] w-[2rem] p-1 rounded-full top-3"> </button>
     {/* <img className=" bg-my "  ></img> */}
     {/* <Button/> */}
   { myData.current_weather && <img  className="mx-auto " src={icons(myData.current_weather.weathercode)} ></img>
     }
     
     <div className="grid justify-items-center text-white">
        <div className="font-raleway text-8xl p-20" >
      {  myData.current_weather && <h1 className="inline-block">{myData.current_weather.temperature} <span className="text-5xl">&deg;C </span></h1>}
       

        </div>
       
        <div>
           <p className="inline-block font-raleway space-x-3"> <span className="">Today</span><span>.</span> <span>{currentdate}</span></p>
            
       
         
        </div>
        <div>
            {/* <icon>location icon</icon> */}
            <p className="cityname"></p>
        </div>
        
     </div>
    </div>


    </>)
}
export default Searchbox;