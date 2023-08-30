import "./Components/Searchbox"
let weather ={
   // apikey:'48999c9f0f622b0accdd3b5b978bf1bc',
    feathcityname: function(lat,long){
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+`${lat}`+"&lon="+`${long}`+"&appid=48999c9f0f622b0accdd3b5b978bf1bc").then((response)=>response.json()).then((data)=>this.displaycity(data));
        
    },
    displaycity: function(data){
        const {name}= data;
        console.log(name);
        document.querySelector(".cityname").innerHTML=name
    }
}
export  {weather};
// weather.feathcityname(coords.latitude,coords.longitude);


// import React ,{useEffect,useState} from 'react';
// import axios from 'axios'

// const Cityname = () => {
    
//       // https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}
//     const [Name, setName] = useState('');
//     useEffect(()=>{
//           const apikey='48999c9f0f622b0accdd3b5b978bf1bc'
//           const lat=31;
//           const long=76;
//           axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`).then( response =>{
//             const fetchedCityName = response.data.name;
//             setName(fetchedCityName);
//           })
//           .catch((error)=>{
//             console.log({error})
//           });
//           console.log("this is my response",response)

//     },[]);
    

    
    
// }
//   Cityname();
// export default Cityname;

  
  
  
  
  
  
