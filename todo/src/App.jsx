import { useState } from 'react'
import './App.css'
import Task from "./Task.jsx"

function App() {
  const [task, setTask] = useState("")
  const [alltask,setAllTask]=useState([])

  function handleSubmit(e){
    e.preventDefault()
    const newTask={task:task,id:Date.now()}
    setAllTask([...alltask,newTask])
    setTask("")

  }

  function deleteTask(id){
    let deletedTasks=alltask.filter((val,i)=> val.id!==id)
    setAllTask(deletedTasks)
 }

  return (
    <>
    <div id="root">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Task" onChange={(e)=>setTask(e.target.value)} value={task}></input><br></br>
        <input id="sub" type="Submit"></input>
      </form>
      <Task tasks={alltask} deleteTask={deleteTask}></Task>
    </div>
      
    </>
  )
}

export default App