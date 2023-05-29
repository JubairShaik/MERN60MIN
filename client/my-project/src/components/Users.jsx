import { useState , useEffect }from "react"

import Axios from "axios"


function Users(){

    const [listOfUsers,setListOfUsers]= useState([]);

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [username, setUsername] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:5000/getUsers").then((response)=>{
            setListOfUsers(response.data)
        })
    }, [])


    const createUser = () => {
        Axios.post("http://localhost:5000/createUser",{
         name,
         age,
         username,
        }).then((response) => {
            setListOfUsers([
                ...listOfUsers,
                {
                 name,
                 age,
                 username,
                }

             ])
        })
    }

     
    return(
        <>
        <h1 className= "text-3xl  text-slate-500" >Avengers</h1>
        <div>
         {listOfUsers.map((user)=>{
            return(

                <div
                key={user.name}
                className="bg-blue-200 flex justify-center text-black gap-10 " >
                    <h1 className="text-start flex-1" >Name:{user.name}</h1>
                    <h2 className="text-start flex-1" > Age: {user.age}</h2>
                    <h1 className="text-start flex-1" >Gender:{user.username}</h1>
                </div>
            )
         })}

        </div>
        <div className="bg-blue-100  justify-center flex p-10 space-x-8  m-3">
   
        <input type="text" className="h-10 text-cyan-800  font-bold w-1/6 
        text-center bg-slate-100 " placeholder="Enter Avenger Name" 
        onChange={(event)=>{
            setName(event.target.value)
        }}
        />
        <input type="number" 
         className="h-10 w-1/8 text-center bg-slate-500 "
         placeholder="Enter Avenger Age" 
         onChange={(event)=>{
             setAge(event.target.value)
        }}  
         />
        <input 
        type="username" 
        className="h-10 w-1/6 text-center bg-slate-500 " 
        placeholder="Enter a UserName"
        onChange={(event)=>{
             setUsername(event.target.value)
        }}
         />

        <button 
        onClick ={createUser}
        className="h-10 w-1/6 rounded-md text-center bg-blue-500">SUBMIT
        </button>
      
        </div>
        </>

    )
}
export default Users 