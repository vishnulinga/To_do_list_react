import React, { Fragment, useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Title from "./../components/Title"
import StatusBar from "./../components/statusBar"
import Input from "./../components/Input"
import TasksList from "./../components/TasksList"
import EmptyElement from "../components/EmptyElement"

const App=()=>{
const [tasks,setTasks]=useState(
    localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):
    [
{name:"Reading",isComplete:true,priority:"low"},
{name:"Washing",isComplete:false,priority:"low"},
{name:"Playing",isComplete:true,priority:"low"},
{name:"Grooming",isComplete:false,priority:"low"}
])
var pending=0,completed=0,high=0,medium=0,low=0
useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
})

const update=()=>{
    tasks.forEach((task)=>{
        if(task.priority=="high")
        high++;
        if(task.priority=="medium")
        medium++;
        if(task.priority=="low")
        low++;
        if(task.isComplete==true)
        completed++;
        if(task.isComplete==false)
        pending++;
    })
   
}
update();

const toggle=(taskindex)=>{
setTasks(
    tasks.map((task,index)=>{
        if(taskindex===index){
            return{
                ...task,isComplete:!task.isComplete,
            }
        }
        return task;
       
    })
    
    
)
update();
}
const changePriority=(taskindex)=>{
    setTasks(
        tasks.map((task,index)=>{
            if(taskindex===index){
                
                return{
                    ...task,priority:task.priority=="high"?"medium":task.priority=="medium"?"low":"high",
                }
               
            }
            return task;
        })
        
    )
    update();
    }
const addTask=(newTask)=>{
setTasks([...tasks,
    {name:newTask,isComplete:false}
])
update();
}
const deleteTask=(taskindex)=>{
    setTasks(
    tasks.filter((task,index)=>taskindex!==index)
        )
        update();
    }

   const [isdeleted,setisdeleted]=useState(false);
   const deleteElement=()=>setisdeleted(true);
   
    

    return(
        <Fragment>
            <Title text="Todo list"/>
            <StatusBar pending={pending} completed={completed} high={high} low={low} medium={medium}/>
            <Input addTask={addTask}/>
            <TasksList tasks={tasks} toggle={toggle} deleteTask={deleteTask} changePriority={changePriority}/>
            {!isdeleted?<EmptyElement deleteElement={deleteElement}/> : null}
            
        </Fragment>
    )
}

ReactDOM.render(<App/>,document.querySelector("#index"));