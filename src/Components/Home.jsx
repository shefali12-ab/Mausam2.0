import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import { ReactDOM } from "react";
// import shower from "../Images/Shower.png";

import icons from "../iconsmap";

import Card from "./Card";
import Card2 from "./Card2";



const Home = (props) => {
  const [name1 , setname]= useState("") //for setting name of city in search box, when button is clicked
  const [myData, setMyData] = useState([]); // for updating the users data
  const [coords, setCoords] = useState({ latitude: -1, longitude: -1 });//for updating the coords 
   async function fetchcoords(cityname){
      //this function is for making api call on the basis of city name entered by user in input tag, for getting the coordinate value 
    const data= await fetch("https://api.opencagedata.com/geocode/v1/json?key=448886709b774cef82447827adbe7597&q="+`${cityname}`);
    const f_data= await data.json();
    return f_data.results[0].geometry
   }
 

  async function getCoordinates() {
    // this function is for getting the coordinates of users current-location.
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then((position) => {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });
  }
  async function getLocationData() {
    const locationCoords = await getCoordinates();
    setCoords(locationCoords);
  }

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=" +
          `${coords.latitude}` +
          "&longitude=" +
          `${coords.longitude}` +
          "&hourly=relativehumidity_2m,showers,snowfall,pressure_msl,surface_pressure,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,rain_sum,showers_sum,snowfall_sum&current_weather=true&timeformat=unixtime&timezone=GMT"
      )
      .then((res) => setMyData(res.data))
      .catch((err) => {
        console.log(err);
      });
    getLocationData();
  }, []);

  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  var creation_time = myData?.current_weather?.time;
  if (creation_time) {
    var currentdate = DAY_FORMATTER.format(creation_time * 1000);
  }
 
  async function Getcity() {

    const val = document.getElementById("searchvalue").value;
    const data = await fetchcoords(val); //here val is the value inputeed by user in serach bar and i am passing it in featchcoords function to get the coordinate value of the city so that i can pass this coordinate value in api call
   //again making a api call on basis of city name entered by user and updating the weather information on the basis of it
    const res = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        `${data.lat}` +
        "&longitude=" +
        `${data.lng}` +
        "&hourly=relativehumidity_2m,showers,snowfall,pressure_msl,surface_pressure,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,rain_sum,showers_sum,snowfall_sum&current_weather=true&timeformat=unixtime&timezone=GMT"
    );
    setMyData(res.data);
 
 
    setname(val[0].toUpperCase()+val.slice(1).toLowerCase()) 
   
   
  }
 
  
 
  return (
    
    <>
      <div className=" flex flex-col lg:flex-row h-screen">
        {/* first div */}
        <div className="bg-midnight flex  flex-col p-9 items-center ">
        <div className="flex items-center">
        <input
            className="bg-grey text-white p-2 m-16 w-[12rem] search-box "
            type="text"
            name="Search"
            id="searchvalue"
            placeholder="Search for places"
          />

          <button
            className=" bg-grey  h-[2rem] w-[2rem] p-1 rounded-full top-3 "
            onClick={Getcity}
          >
           
            S
          </button>
        </div>
         
          {myData.current_weather && (
            <img
              className="mx-auto "
              src={icons(myData.current_weather.weathercode)}
            ></img>
          )}

          <div className="grid justify-items-center text-white">
            <div className="font-raleway text-8xl p-20">
              {myData.current_weather && (
                <h1 className="inline-block">
                  {myData.current_weather.temperature}{" "}
                  <span className="text-5xl">&deg;C </span>
                </h1>
              )}
            </div>

            <div>
              <p className="inline-block font-raleway space-x-3">
                {" "}
                <span className="">Today</span>
                <span>.</span> <span>{currentdate}</span>
              </p>
            </div>
            <div>
              {/* <icon>location icon</icon> */}
              <p className="cityname">{name1}</p>
            </div>
          </div>
        </div>
        {/* second div */}
        <div className="bg-dark lg:w-4/5 ">
          {/* THis div for info page */}

          {/* <button className=" bg-white  h-[2rem] w-[2rem] p-1 rounded-full m-5 absolute right-[10rem]" onClick={Changetodeg}> &deg; F</button>
      <button className=" bg-grey  h-[2rem] w-[2rem] p-1 rounded-full m-5 absolute right-[6rem]"> &deg; C</button> */}
          <div className=" mt-[5rem] ml-[10rem] flex flex-col  lg:flex-row">
            {myData.daily ? (
              <Card
                className="card1"
                time={myData.daily.time[1]}
                max={myData.daily.temperature_2m_max[1]}
                min={myData.daily.temperature_2m_min[1]}
                imgval={icons(myData.daily.weathercode[1])}
              />
            ) : (
              "Loading data..."
            )}

            {myData.daily && (
              <Card
                time={myData.daily.time[2]}
                max={myData.daily.temperature_2m_max[2]}
                min={myData.daily.temperature_2m_min[2]}
                imgval={icons(myData.daily.weathercode[2])}
              />
            )}
            {myData.daily && (
              <Card
                time={myData.daily.time[3]}
                max={myData.daily.temperature_2m_max[3]}
                min={myData.daily.temperature_2m_min[3]}
                imgval={icons(myData.daily.weathercode[3])}
              />
            )}

            {myData.daily && (
              <Card
                time={myData.daily.time[4]}
                max={myData.daily.temperature_2m_max[4]}
                min={myData.daily.temperature_2m_min[4]}
                imgval={icons(myData.daily.weathercode[4])}
              />
            )}

            {myData.daily && (
              <Card
                time={myData.daily.time[5]}
                max={myData.daily.temperature_2m_max[5]}
                min={myData.daily.temperature_2m_min[5]}
                imgval={icons(myData.daily.weathercode[5])}
              />
            )}
          </div>
          <div className=" w-[80rem] flex flex-col ">
            <h1 className="text-white mt-[3rem] ml-[11rem] font-raleway font-bold text-2xl">
              Today's Highlight
            </h1>
            <div className="flex flex-col  lg:flex-row">
            {myData.current_weather && (
              <Card2
                text={"Wind Speed"}
                unit={"km/h"}
                val={myData.current_weather.windspeed}
              />
            )}
            {myData.current_weather && (
              <Card2
                text={"Humidity"}
                unit={"%"}
                val={myData.hourly.relativehumidity_2m[0]}
              />
            )}
            {myData.current_weather && (
              <Card2
                text={"Visibility"}
                unit={"m"}
                val={myData.hourly.visibility[0]}
              />
            )}
            {myData.current_weather && (
              <Card2
                text={"Sea Level Pressure"}
                unit={"hpa"}
                val={myData.hourly.surface_pressure[0]}
              />
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
