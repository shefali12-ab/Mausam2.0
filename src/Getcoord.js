import Searchbox from "./Components/Searchbox";
import Infopage from "./Components/Infopage";
let coordinate ={
 featchcoords: async function(cityname)
 {
    const data= await fetch("https://api.opencagedata.com/geocode/v1/json?key=448886709b774cef82447827adbe7597&q="+`${cityname}`);
    const f_data= await data.json();
    return f_data.results[0].geometry
   //  then((response)=>response.json()).then((data)=>{
   //    console.log("Getcord",data)
   //    return data.results[0].geometry;
   // })
        
 },
//  displaycoords : function(data){
//     // const [lat,lng] =data.results.annotations;
//    //   console.log(data.results[0].annotations.DMS.lat);//thse coordinate i need to pass in api call
//    //   console.log(data.results[0].annotations.DMS.lng);
//      const lati=data.results[0].annotations.DMS.lat;
//      const long=data.results[0].annotations.DMS.lng;
//      console.log(lati);
//      console.log("parsed latitude",parseFloat(lati))
//      console.log("parsed longitude",parseFloat(long))
//      const lati1=parseFloat(lati);
//      console.log(lati1)
//      const long1=parseFloat(long);
//      console.log(long1);
//      //this.newdata(lati1,long1);
//      return [lati1,long1];
//     // setCoords(lati,long);
//      //data.results[0].annotations[0].DMS.lat
//     // console.log("This is lat of coords",lat);
//     // console.log(lng);
//  }
 
//  newdata: function(lati1,long1){
//    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + `${lati1}` +"&longitude="+`${long1}`+"&hourly=relativehumidity_2m,showers,snowfall,pressure_msl,surface_pressure,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,uv_index_max,rain_sum,showers_sum,snowfall_sum&current_weather=true&timeformat=unixtime&timezone=GMT").then((response)=>response.json()).then((data1)=>this.updatesearchbox(data1))
//  },
//  updatesearchbox : function(data1){
//    // console.log("update function")
//    // console.log("This is updated data",data1);
//    console.log(data1.daily.time[0]);
//    console.log("this is time", document.getElementsByClassName("card1"));
//    // document.getElementsByClassName(".card1").time=data1.daily.time[0]
//    console.log(data1.daily.temperature_2m_max[0]);
   

//  }
 
}

//coordinate.featchcoords("lucknow");
export {coordinate}