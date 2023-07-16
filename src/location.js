
export default async function getCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).then((position) => {
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  });
}



  //need to pass the value of latitude and longitude in Infopage some how
//   function positionSuccess(position){
   
  
//      var lat = position.coords.latitude
//    console.log(position)
  
//    return function(){ 
//     return lat
//    }

//   }

 
//   const positionError =(error)=>{
//     console.error(error)
//   }
//  navigator.geolocation.getCurrentPosition(positionSuccess,positionError);
 
//  function calculate(lat,long){
//   // console.log(lat)
//   // console.log(long)
//   //return {val1 : lat,val2:long}
//   return lat
// }
// console.dir(positionSuccess())

//console.log(geolocation.latitude)
// const getlocation =()=>{
     
//     // const showposition = (position) =>{
         
//     //     console.log(position.coords.latitude) 
//     //      console.log(position.coords.longitude) 
        
//     //     return  position.coords.latitude
        
       
//     // } 
        
//         if(navigator.geolocation){
//             return navigator.geolocation.getCurrentPosition.position.coords.latitude
//         }
//         else{
//             console.log("current location not supported")
//         }
      
     
     
// }
// let data = getlocation();
// console.log(data)
//console.log(getlocation().showposition.lat)//console.log(getlocation(). showposition.lat)
// const showposition = (position) =>{
//     return(position.coords.latitude, position.coords.longitude)
       
    
   
// }

//getlocation();
//console.log(getlocation().showposition().latitude);
// getlocation()?.showposition?.lat
// console.log(getlocation.showposition.lat)