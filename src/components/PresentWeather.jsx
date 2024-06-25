import React from 'react'


import icons from "../iconsmap";



const PresentWeather = ({currWeatherCode,currTemp,currDate,name,onCityChange}) => {

     //const [cityName , setcityName]= useState("") //for setting name of city in search box, when button is clicked
    
    const SubmitSearch = ()=>{
      //console.log("submit")
      const input = document.getElementById("searchvalue").value
      onCityChange(input)
      setcityName(input)
    }

   

  return (
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
        onClick={SubmitSearch}
      >
       
        S
      </button>
    </div>
     
    
       <img
          className="mx-auto "
          src={icons(currWeatherCode)}
        ></img>
     <p className='text-white text-4xl p-5'>{currWeatherCode}</p>
      <div className="grid justify-items-center text-white">
        <div className="font-raleway text-8xl p-20">
       
           <h1 className="inline-block">
              {currTemp}
              <span className="text-5xl">&deg;C </span>
            </h1>
        </div>

        <div>
          <p className="inline-block font-raleway space-x-3">
            {" "}
            <span className="">Today</span>
            <span>.</span> <span>{currDate}</span>
          </p>
        </div>
        <div>
          {/* <icon>location icon</icon>  */}
          <p className="cityname">{name}</p>
        </div>
      </div>
    </div>
  )
}

export default PresentWeather