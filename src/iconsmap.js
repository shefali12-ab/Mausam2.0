import  clearsky  from "../src/Images/Clear.png"
import  shower from "./Images/Shower.png"
import  snow from "./Images/Snow.png"
import  HeavyRain from "./Images/HeavyRain.png"
import  hail from "./Images/Sleet.png"
import  LightRain from "./Images/LightRain.png"
import Thunderstorm from "./Images/Thunderstorm.png"
const icons=(code)=>{

    if(code == 0 || code ==1 || code ==2 || code==3 ){
        return clearsky
//clearsky
    }
    if(code==45 || code ==48){
        //hail
        return hail;
    }
    if(code==51 || code ==53 || code ==55 || code==56 || code==57){
      //light rain
      return LightRain
    }
    if(code==61 || code ==63 || code ==65 || code==66 || code==67){
        //heavy rain
        return HeavyRain
      }
      if(code==71 || code ==73 || code ==75 || code==77 ){
        //snow
        return snow
      }
      if(code==80 || code ==81 || code ==82 || code==85 || code==86){
        //shower
        return shower
      }
      if(code==95 || code ==96 || code ==99  ){
        //thunder storm
        return Thunderstorm
      }


}
export default icons;