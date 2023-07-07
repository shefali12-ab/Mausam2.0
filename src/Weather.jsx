// console.log("Hello");
// navigator.geolocation.getCurrentPosition(success,error);

// function success(position) {
//     console.log(position);
//    }
   
//    function error() {
//     console.log("error");
//    }

/*https://api.open-meteo.com/v1/forecast?
latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,
rain,showers,weathercode,surface_pressure,visibility,vapor_pressure_deficit,windspeed_10m&daily=weathercode,
temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum&current_weather=true&timeformat=unixtime&past_days=5&forecast_days=1&timezone=GMT
*/
// import react from "react"
// import axios from "axios"
// export function getWeather(lat,lon,timezone){
//    return axios.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,weathercode,surface_pressure,visibility,vapor_pressure_deficit,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum&current_weather=true&timeformat=unixtime",{
//    params: {
//      latitude : lat,
//      longitude : lon,
//      timezone,
//     },
//    }).then(({data})=>{
//        { return{
//          current : parseCurrentWeather(data),
//          daily : parseDailyWeather(data),
//          // hourly : parseHourlyWeather(data)
//        }
         
//          //   console.log(data)
//          // var time1 = data.daily.time[1];
//          // console.log(time1);
//          // var d= new Date(time1*1000).toLocaleDateString();
//          // console.log(d)
//       //   var timeStampCon = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
//       //    console.log(timeStampCon);
        
//       }
//    })
// }
//  function parseCurrentWeather({current_weather , daily}){
 
//    const {
//       temperature : currentTemp ,
//        windspeed:windSpeed , 
//        weathercode : iconCode ,
//        time : currTime
//       } = current_weather

//     const {
//       temperature_2m_max :[maxTemp],
//       temperature_2m_min :[minTemp],
//       precipitation_sum : [precip],
//       time : [dailyTime],

//     }  = daily
//    return {
//       currentTemp : Math.round(currentTemp),
//    highTemp: Math.round( maxTemp),
//    lowTemp: Math.round(minTemp),
//    windSpeed : Math.round(windSpeed),
//    precipitation: Math.round(precip*100)/100,
//     currTime: currTime,
//    iconCode
//    }
   

//  }

//  function parseDailyWeather({daily}){

// return daily.time.map((time,index)=>{
//    return {
//       timeStamp : daily.time[index],
      
//       iconCode : daily.weathercode[index],
//       maxTemp : Math.round(daily.temperature_2m_max[index]),
//       minTemp : Math.round(daily.temperature_2m_min[index])
//    }
// })

//  }