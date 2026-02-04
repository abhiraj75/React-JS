import { useState } from 'react'
import './App.css'
import {toast} from "react-toastify"

function App() {
  const [user, setUser] = useState({
    name:"",
    email:"",
    number:"",
    password:""
  })

  const[error,setError]=useState(null)
  function handleSubmit(e){
    e.preventDefault();
    if (user.name.length<3) toast.error("Invalid Name")
    if (!user.email.includes("@") || (!user.email.includes("@"))) toast.error("Invalid Email")
    if (user.number.length!=10) toast.error("Invalid Number")
    if (user.password.length<8) toast.error("Weak Password")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e)=>setUser({...user,name:e.target.value})}></input><br></br>
        <input type="text" placeholder="Email" onChange={(e)=>setUser({...user,email:e.target.value})}></input><br></br>
        <input type="text" placeholder="Mobile Number" onChange={(e)=>setUser({...user,number:e.target.value})}></input><br></br>
        <input type="text" placeholder="Password" onChange={(e)=>setUser({...user,password:e.target.value})}></input><br></br>
        <input id="sub" type="Submit"></input>
      </form>
    </div>
  )
}

export default App
