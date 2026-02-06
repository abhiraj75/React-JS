import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  let url = "https://69858de26964f10bf25386b3.mockapi.io/api/v1/users";
  const [user, setUser] = useState({
    name: "",
    age: "",
    image: "",
  });
  const [allUser, setAllUser] = useState(null);
  const [editId,setEditId]=useState(null)
  async function AddUser(e) {
    e.preventDefault();
    if(editId){
        const response=await axios.put(`${url}/${editId}`,user)
        setEditId(null);
    }else{
        const response = await axios.post(url, user);
    }
    setUser({
        name:"",
        age:"",
        image:""
    })
    FetchData();
    
  }
  async function FetchData() {
    const reponse = await axios.get(url);
    setAllUser(reponse.data);
  }
  function updateUser(id) {
    let userToUpdate = allUser.find((user) => id === user.id);
    setUser(userToUpdate);
    setEditId(id)
  }
  function deleteUser(id){
    axios.delete(`${url}/${id}`);
    FetchData()
  }

  useEffect(() => {
    FetchData();
  }, []);
  console.log(allUser);

  return (
    <div className="container">
      <form>
        <input
          type="text"
          value={user.name}
          placeholder="Name"
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="text"
          value={user.age}
          placeholder="Age"
          onChange={(e) => {
            setUser({ ...user, age: e.target.value });
          }}
        />
        <input
          type="text"
          value={user.image}
          placeholder="Image URL"
          onChange={(e) => {
            setUser({ ...user, image: e.target.value });
          }}
        />
        <button onClick={AddUser}>{editId?"Update":"Add"}</button>
      </form>
      <div>
        {allUser &&
          allUser.map((val) => {
            return (
              <div key={val.id} className="card">
                <img src={val.image} />
                <h3>{val.name}</h3>
                <p>{val.age}</p>
                <button onClick={() => updateUser(val.id)}>Update</button>
                <button onClick={() => deleteUser(val.id)}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;