import { useEffect, useState } from 'react'

import './App.css'
import PresentWeather from './components/PresentWeather'
import InfoWeather from './components/InfoWeather'
import { getWeather,getWeatherByCords,getForecast,getForecastByCords } from './api/fetch'

function App() {
  const [name,setName]=useState("Delhi")
  const [weatherData,setWeatherData] = useState({
    temp:'0',
    code:'',
    dateFormat:'',
    Cityname:'',
    windStatus: 0,
    humidity: 0,
    airPressure: 0,
    visibilityInMiles: 0
  })
  const [forecastData,setForecastData] = useState({})
  const [keys,setKeys] =useState([])
  const changeWeather = (data)=>{
    const { weather , main ,visibility, wind,name } =data;
     const date =new Date();
     const dateOptions = { weekday: 'short', day: 'numeric', month: 'short' }
     setWeatherData(
      {
        temp: Math.round(main.temp),
        code:weather[0].main,
        dateFormat: date.toLocaleDateString('en-US', dateOptions),
        Cityname: name,
        windStatus:wind.speed,
        humidity:main.humidity,
        airPressure:main.pressure,
        visibilityInMiles: visibility
      }

     )
  }
  const handleCityChange = (name)=>{
    setName(name)
  }

  const changeForecast = (data) => {
    const dailyForecast = []

    
    data.list.forEach(segment => {
      const fechtxt = segment.dt_txt
      const fecha = new Date(fechtxt)
      const dia = fecha.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })
     
      if (!dailyForecast[dia]) {
        dailyForecast[dia] = {
          minTemp: segment.main.temp,
          maxTemp: segment.main.temp,
          weather: segment.weather[0].main
        }
      } else {
     
        dailyForecast[dia].minTemp = Math.min(dailyForecast[dia].minTemp, segment.main.temp)
        dailyForecast[dia].maxTemp = Math.max(dailyForecast[dia].maxTemp, segment.main.temp)
      }
    })
    const dayKeys = Object.keys(dailyForecast)
    setForecastData(dailyForecast)
    setKeys(dayKeys)
   
  }
//  console.log(forecastData)
 

  useEffect(  ()=>{
    getWeather(name).then((response)=>changeWeather(response.data)).catch((error)=>{
      console.log("Failed to get data",error)
      alert("Enter correct city name")
    })
    getForecast(name).then((response)=>changeForecast(response.data))
  
  
  },[name])
  //console.log("This is weather data",weatherData)
  return (
    <>
    <div className=" flex flex-col sm:flex-row   h-screen sm:h-dvh"> 
      <PresentWeather currWeatherCode={weatherData.code} currTemp={weatherData.temp} currDate={weatherData.dateFormat} name={weatherData.Cityname} onCityChange={handleCityChange} />
      <InfoWeather arrData={forecastData} index={keys} weatherData={weatherData}/>
    
    
     </div>


   
    </>
  )
}
export default App;

