import {dog} from "../dog.js"
import {cat} from "../cat.js"
import "./Profile.css"
import {useState} from "react"


function Animals(){
    const [isDog, setIsDog] = useState(true);

    const handleToggle = () => {
        setIsDog(!isDog); 
    };

    const currentPets = isDog ? dog : cat;

    return(
        <div>
            <h1>ANIMALS!!</h1>
        <div id="root">
            {currentPets.map((val)=>{
                return <div id="card" key={val.id}>
                    <img src={val.image} height="400px" width="400px"></img>
                    <p>{val.breed}</p>
                    <p>{val.age}</p>
                    <p>{val.price}</p>
                </div>
            })}
        <div id="btn">
        <button onClick={handleToggle}>{isDog ? "Show Cats" : "Show Dogs"}</button>
        </div>
        </div>
        </div>

    )
}

export default Animals