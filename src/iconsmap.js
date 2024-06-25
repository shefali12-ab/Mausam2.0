import  clearsky  from "../src/images/Clear.png"
import  shower from "./images/Shower.png"
import  snow from "./images/Snow.png"
import  HeavyRain from "./images/HeavyRain.png"
import  hail from "./images/Sleet.png"
import  LightRain from "./images/LightRain.png"
import Thunderstorm from "./images/Thunderstorm.png"
import LightCloud from "./images/LightCloud.png"
import HeavyCloud from "./images/HeavyCloud.png"
const icons=(code)=>{

    if(code == 'Clear'){
        return clearsky
//clearsky
    }
    if( code== 'Clouds')
    {
      return LightCloud
    }
    if( code== 'Haze' || code=='Mist' || code=='Smoke' || code=='Fog' || code=='Tornado' || code=='Dust' || code=='Sand' || code=='Ash' || code=='Squall'){
        //hail
        return hail;
    }
    if(code== 'Drizzle'){
      //light rain
      return LightRain
    }
    // if(code== ''){
    //     //heavy rain
    //     return HeavyRain
    //   }
      if(code== 'Snow'){
        //snow
        return snow
      }
      // if(code== ''){
      //   //shower
      //   return shower
      // }
      if(code== 'Thunderstorm'){
        //thunder storm
        return Thunderstorm
      }


}
export default icons;