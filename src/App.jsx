import { useEffect, useState } from 'react'
import Mainpage from './Components/Mainpage'
//import {getWeather} from './Weather'
import axios from 'axios'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// getWeather(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderWeather).catch(e=>{
//   console.error(e)
//   // alert("Error in getting weathers")
// })
// function renderWeather({current,daily}){
//   renderCurrentWeather( current)
//   renderDailyWeather(daily)
// }
// function renderCurrentWeather(current){
//   document.querySelector("[data-current-temp]").textContent = current.currentTemp
//   document.querySelector("[data-windspeed]").textContent= current.windSpeed +" " +"km/h"
 
//   document.querySelector("[data-current-time]").textContent = new Date(current.currTime).toLocaleDateString()

// }
// const dayCardtemplate = document.getElementById("day-card-template")
// function renderDailyWeather(){


// }
function App() {


  return (
    <>
    <Mainpage/>
   
    </>
  )
}
export default App;

