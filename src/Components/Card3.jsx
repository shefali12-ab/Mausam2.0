import react from "react"
const Card3 =(props)=>{
    return(<>
    <div className="bg-midnight w-[19rem] h-[10rem] mt-[4rem] ml-[11rem] p-2 inline-block text-white font-raelway">
        <h2 className="text-center p-4 text-base mb-[1rem]">{props.text}</h2>
        <p className="text-center text-4xl" >{props.val} <span className="text-3xl">{props.unit}</span></p>
    </div>
    
    </>)
}
export default Card3;