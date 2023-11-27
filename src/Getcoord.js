import Searchbox from "./Components/Home";

let coordinate ={
 featchcoords: async function(cityname)
 {
    const data= await fetch("https://api.opencagedata.com/geocode/v1/json?key=448886709b774cef82447827adbe7597&q="+`${cityname}`);
    const f_data= await data.json();
    return f_data.results[0].geometry
   
        
 }

 
}

//coordinate.featchcoords("lucknow");
export {coordinate}