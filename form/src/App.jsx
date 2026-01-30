import { useState } from 'react'
import "./App.css"


function App() {
  const [toggle,setToggle]=useState("")
  function showForm(e){
    setToggle(e.target.value)

  }

  return (
    <div id="root">
      <form style={{display:toggle==="signup"?"block":"none"}}>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder='Email'></input>
        <input type="date" placeholder='Date'></input>
        <input type="text" placeholder='Password'></input>
      </form>
      <form style={{display:toggle==="login"?"block":"none"}}>
        <input type="email" placeholder='Email'></input>
        <input type="text" placeholder='Password'></input>

      </form>
     
      <button value="login"onClick={(e)=>showForm(e)}>Login</button>
      <button value="signup"onClick={(e)=>showForm(e)}>Sign Up</button>
    </div>
  ) 
}

export default App
