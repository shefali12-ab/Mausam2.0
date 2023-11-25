import react from "react"
const Card3 =(props)=>{
    return(<>
    <div className="bg-midnight lg:w-[23rem]  sm: w-[12rem] h-[13rem] mt-[2rem] ml-[11rem] p-2 flex flex-col items-center content-center text-white font-raelway">
        <h2 className="text-center p-4 text-base mb-[1rem]">{props.text}</h2>
        <p className="text-center text-4xl" >{props.val} <span className="text-3xl">{props.unit}</span></p>
    </div>
    
    </>)
}
export default Card3;