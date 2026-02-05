

function Task({tasks,deleteTask}){
    return <div>
        {tasks.map((val)=>{
            return <div style={{display:"flex"}}key={val.id}>
                <h3 style={{margin:"5px"}}>{val.task}</h3>  
                <button style={{margin:"5px"}} onClick={()=>deleteTask(val.id)}>Delete</button>
             </div>     
        })}
    </div>
}

export default Task