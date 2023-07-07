import react from "react"
import { ReactDOM } from "react";
import shower from '../Images/Shower.png'
import Button from "./Button"
//import { getWeather } from "../Weather";
const Searchbox=()=>{
    return(<>
    
    <div className="bg-midnight  justify-items-center ">
     <input className="bg-grey text-white p-2 m-16 w-[12rem] search-box " type="search" name="Search" id="" placeholder="Search for places"/>
     
     <button className=" bg-grey  h-[2rem] w-[2rem] p-1 rounded-full top-3"> </button>
     {/* <img className=" bg-my "  ></img> */}
     {/* <Button/> */}
     <img  className="mx-auto " src=""></img>
     
     
     <div className="grid justify-items-center text-white">
        <div >
        <h1 data-current-temp></h1>
       

        </div>
        <h1> </h1>
        <div>
           <p className="inline-block"> Today </p>
           <p  className="inline-block"> .</p>
           <p  className="inline-block" > </p>
        </div>
        <div>
            {/* <icon>location icon</icon> */}
            <p></p>
        </div>
        
     </div>
    </div>


    </>)
}
export default Searchbox;