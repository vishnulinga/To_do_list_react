import React,{useState,useRef,useEffect} from "react"
const Input=(props)=>{
const [inputvalue,setInputValue]=useState("");

const inputRef=useRef();
useEffect(()=>{
    inputRef.current?.focus();
},[])
   
const inputChange=(event)=>{
setInputValue(event.target.value);
    };
    const submit=()=>{
        if(inputvalue){
            props.addTask(inputvalue);
        }
        setInputValue("");
    };

    return(
        <div>
            <input ref={inputRef}style={{width:"200px",height:"30px",marginTop:"20px"}}placeholder="New Task..."type="text"  onChange={inputChange} value={inputvalue}></input>
            <button onClick={submit}>➕ </button> 
        </div>
    )
} 
export default Input;