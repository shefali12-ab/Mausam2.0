import react from "react"
const Card2 =({title,unit,value})=>{
    return(<>
    <div className="bg-midnight lg:w-[23rem]  sm: w-[12rem] h-[13rem] mt-[2rem] ml-[11rem] p-2  i text-white font-raleway ">
        <h2 className="text-center p-4 text-base mb-[1rem]" >{title}</h2>
        <p className="text-center text-3xl">{value}  <span className="text-xl">  {unit}</span> </p>
    </div>
    
    </>)
}
export default Card2;