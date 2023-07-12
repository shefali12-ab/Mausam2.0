import react from "react"
const Card2 =(props)=>{
    return(<>
    <div className="bg-midnight w-[19rem] h-[13rem] mt-[4rem] ml-[10rem] p-2 inline-block text-white ">
        <h2 >{props.text}</h2>
        <p >{props.val}</p>
    </div>
    
    </>)
}
export default Card2;