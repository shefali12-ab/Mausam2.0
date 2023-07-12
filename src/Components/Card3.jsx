import react from "react"
const Card3 =(props)=>{
    return(<>
    <div className="bg-midnight w-[19rem] h-[10rem] mt-[4rem] ml-[12rem] p-2 inline-block text-white ">
        <h2 >{props.text}</h2>
        <p >{props.val}</p>
    </div>
    
    </>)
}
export default Card3;