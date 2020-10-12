import React, { Fragment } from "react"
const TasksList=(props)=>{
   
    
return(

    <ol>
                {props.tasks.map((task,index)=>{
                       const onClicked=()=>{
                        
                        {props.toggle(index)}
                       }     
                       const onDelete=()=>{
                           {props.deleteTask(index)}
                       }
                       const onPriority=()=>{
                           {props.changePriority(index)}
                       }
                    return (
                    <span key={index} >
                    <li style={{cursor:"pointer"}} onClick={onClicked} ><h3>{task.name} {task.isComplete?"✔" :"❌"} </h3>{task.priority=="high"?"HIGH":task.priority=="medium"?"MEDIUM":"LOW"}</li>
                    <span style={{cursor:"pointer"}} onClick={onDelete}>{"Delete🗑  " }</span>
                    <span style={{cursor:"pointer",color:"blue"}} onClick={onPriority}>Change Priority⚪  </span>
                    
                    </span>
                    )
                })}
</ol> 

)}
export default TasksList