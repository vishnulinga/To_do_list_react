import React,{useEffect} from "react"
const EmptyElement=(props)=>{
useEffect(()=>{
    return ()=>{
        console.log("Inside return statement")
    }
},[])
return (
    <div>
        <p onClick={props.deleteElement}>Remove me</p>
    </div>
)
}
export default EmptyElement;