import {users} from "../users"
import {useState} from "react"
import "./Profile.css"

function Profile(){
    const [allUsers,setAllUsers]=useState(users)
    function increaseLikes(id){
        let updatedLikes=allUsers.map((val)=>{
            if(id==val.id){
                return {...val,likes:val.likes+1}
            }else{
                return val           
        }})
            setAllUsers(updatedLikes)
    }

    return <div id="root">
        <h2><u>Seniors:</u></h2>  
        {allUsers.map((val)=>{
            if (val.experience>=4){
            return <div key={val.id} id="card">
                <img src={val.image}></img>
                <h3>{val.name}</h3>
                <p>{val.description}</p>
                <p>{val.experience>=4?"Senior":"Fresher"}</p>
                <p onClick={()=>increaseLikes(val.id)}>Likes : {val.likes}</p>
                <hr></hr>
                </div>
                
            }return null
            })}
        <h2><u>Freshers:</u></h2>   
        {allUsers.map((val)=>{
            if (val.experience<4){
            return <div key={val.id} id="card">
                <img src={val.image}></img>
                <h3>{val.name}</h3>
                <p>{val.description}</p>
                <p>{val.experience>4?"Senior":"Fresher"}</p>
                <p onClick={()=>increaseLikes(val.id)}>Likes : {val.likes}</p>
                <hr></hr>
                </div>
            }return null
            })}
           
    </div>
}

export default Profile;