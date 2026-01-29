import './App.css'
import {useState} from 'react'

function App() {
  let [count,setCount]= useState(0)
  let [bgcolor,setbgcolor]= useState("Light")

  function increment(){
    count++
    setCount(count)
  }

  function decrement(){
    count--
    setCount(count)
  }

  function reset(){
    setCount(0)
  }

  function theme(){
   setbgcolor((prev)=>{
    if(prev=="Light"){
      return "Dark"
    }else{
      return "Light"
    }
   })
  }

  return <div style={{backgroundColor:bgcolor=="Dark"?"black":"white",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
    <p style={{color:"red", display:"flex", justifyContent:"center" , fontSize:"30px"}}>Count : {count}</p>
    <button onClick={increment}>Increment</button><br></br>
    <button onClick={decrement}>Decrement</button><br></br>
    <button onClick={reset}>Reset</button><br></br>
    <button onClick={theme}>Theme : {bgcolor}</button>
    </div>
    </div>
  
  
}

export default App
