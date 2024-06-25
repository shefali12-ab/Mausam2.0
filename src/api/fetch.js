import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY


const getWeatherByCords = (lat,lon)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(res=>res);

}
const getForecastByCords = (lat,lng)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`).then(res=>res);
}
const getWeather =  (place)=>{
     return   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`).then(res=>res);
    
}
const getForecast =(place)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=${apiKey}`).then(res=>res);
}
export {
    getWeatherByCords,getForecast,getWeather,getForecastByCords
}