import {users} from "../users"
import {useState} from "react"


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

    return <div>
        {allUsers.map((val)=>{
            return <div key={val.id}>
                <img src={val.image}></img>
                <h3>{val.name}</h3>
                <p>{val.description}</p>
                <p>{val.experience>4?"Senior":"Fresher"}</p>
                <p onClick={()=>increaseLikes(val.id)}>Likes : {val.likes}</p>
                <hr></hr>
                </div>
        })}
    </div>
}

export default Profile;