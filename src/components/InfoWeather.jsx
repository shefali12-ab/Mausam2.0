import React from "react";

import Card2 from "./Card2";
import icons from "../iconsmap";
const InfoWeather = ({ arrData, index, weatherData }) => {
  return (
    <div className="bg-dark  w-full h-full">
      <div className=" mt-[5rem] ml-[10rem] flex flex-col  lg:flex-row">
        {
          // console.log("from info",index)
          index.slice(0, 5).map((day) => {
            const minTemp = Math.round(arrData[day].minTemp);
            const maxTemp = Math.round(arrData[day].maxTemp);
            const weatherCode = arrData[day].weather;
            return (
              <>
                <div className="p-4 bg-midnight w-[10rem] h-[12rem] text-white inline-block m-[1rem] font-raleway ">
                  <h1 className="text-sm"> {day}</h1>
                  <img className="h-[4rem] mt-[1rem] mx-[auto]" src={icons(weatherCode)
                  }></img> 

                  <p className="inline-block  mt-[2rem] mr-[2.1rem] text-sm">
                    {" "}
                    {minTemp} &deg;C{" "}
                  </p>
                  <p className=" inline-block mt-[2rem] text-sm text-grey">
                    {" "}
                    {maxTemp} &deg;C{" "}
                  </p>
                </div>
              </>
            );
          })
        }
      </div>
      <div className=" w-[80rem] flex flex-col ">
        <h1 className="text-white mt-[3rem] ml-[11rem] font-raleway font-bold text-2xl">
          Today's Highlight
        </h1>
       

        <div className="grid grid-cols-2 ">
          <Card2
            title={"Wind Speed"}
            unit={"miles/h"}
            value={weatherData.windStatus}
          />
          <Card2
            title={"Humidity"}
            unit={"%"}
            value={weatherData.windStatus}
          />
          <Card2
            title={"Visibility"}
            unit={"m"}
            value={weatherData.windStatus}
          />
          <Card2
            title={"Sea Level Pressure"}
            unit={"hPa"}
            value={weatherData.windStatus}
          />

         
        </div>
      </div>

     
    </div>
  );
};

export default InfoWeather;
