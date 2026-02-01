import { useState } from 'react'
import "./App.css"


function App() {
  const [toggle,setToggle]=useState("")
  function showForm(e){
    setToggle(e.target.value)
  }

  return (
    <div id="root">
      <form style={{display:toggle?"block":"none"}}>
        {toggle==="signup" && <input type="text" placeholder="Name"></input>}
        <input type="email" placeholder='Email'></input>
        {toggle==="signup" && <input type="date" placeholder='Date'></input>}
        <input type="text" placeholder='Password'></input><br></br>
        {toggle==="login" &&<button style={{backgroundColor:"red"}}>Login</button>}
        {toggle==="signup" &&<button style={{backgroundColor:"red"}}>Sign Up</button>}
      </form>

      {!toggle &&<button value="login"onClick={(e)=>showForm(e)}>Login</button>}
      {!toggle &&<button value="signup"onClick={(e)=>showForm(e)}>Sign Up</button>}
    </div>
  ) 
}

export default App
